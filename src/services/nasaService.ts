import {EarthDate, Rover, SolDate} from '@/types/Nasa';
import dayjs from 'dayjs';

export const getMarsPhotoEndpoint = (
  selectedRover: Rover,
  solDate: SolDate,
  earthDate: EarthDate,
  selectedCamera: string | null,
  apiKey: string = process.env.NASA_KEY || 'DEMO_KEY',
): string => {
  const baseEndpoint = `https://api.nasa.gov/mars-photos/api/v1/rovers/${
    selectedRover || 'curiosity'
  }/photos`;

  // Default to current date if no earthDate or solDate is provided
  const defaultEarthDate = dayjs().format('YYYY-M-D');

  // Construct the query parameters based on the provided conditions
  const dateParam = solDate
    ? `sol=${solDate}`
    : `earth_date=${earthDate?.startDate || defaultEarthDate}`;

  const cameraParam = selectedCamera ? `&camera=${selectedCamera}` : '';

  const queryString = `${dateParam}${cameraParam}&api_key=${apiKey}`;

  return `${baseEndpoint}?${queryString}`;
};
