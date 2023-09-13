import {PhotoCard} from '@/components/PhotoCard';
import {RoverPhoto} from '@/types/Nasa';

type PhotoListProps = {
  photos: RoverPhoto[];
};

function PhotoList({photos}: PhotoListProps) {
  if (!photos || photos.length === 0) {
    return (
      <div className="w-full h-full px-10 md:px-0 text-center py-20 lg:py-0 flex flex-col justify-center text-white items-center">
        <h2 className="text-xl font-semibold mb-4">No Photos Available</h2>
        <p>It seems there were no photos taken on this day.</p>
        <p className="mt-2">Try searching for photos from another date.</p>
      </div>
    );
  }

  return (
    <div className="grid justify-items-center xl:grid-cols-2 2xl:grid-cols-3 gap-4 my-5 pb-10 pt-10">
      {photos.map(photo => (
        <PhotoCard
          key={photo.id}
          image={photo.img_src}
          title={photo.earth_date}
          camera={photo.camera}
          landing_date={photo.rover.landing_date}
          launch_date={photo.rover.launch_date}
          status={photo.rover.status}
        />
      ))}
    </div>
  );
}

export default PhotoList;
