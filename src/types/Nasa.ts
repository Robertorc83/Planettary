import {DateValueType} from 'react-tailwindcss-datepicker';

export interface RoverPhoto {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: 3942;
    max_date: string;
    total_photos: 677361;
    cameras: Camera[];
  };
}

export interface Camera {
  name: string;
  full_name: string;
}

export interface SearchRoverParams {
  rover: Rover;
  solDate: SolDate;
  earthDate: EarthDate;
}

export type Rover = string | null;
export type SolDate = number | null;
export type EarthDate = DateValueType | null;

export interface MarsData {
  photos: RoverPhoto[];
}
