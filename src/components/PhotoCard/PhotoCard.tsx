import React from 'react';
import Image from 'next/image';
import {Camera} from '@/types/Nasa';

type PhotoCardProps = {
  image: string;
  title: string;
  landing_date: string;
  launch_date: string;
  status: string;
  camera: Camera;
};

function PhotoCard({
  image,
  title,
  landing_date,
  launch_date,
  status,
  camera,
}: PhotoCardProps) {
  return (
    <section className="w-[350px] h-[350px] group relative block  m-2 rounded-lg">
      <Image
        alt="Developer"
        src={image}
        width={350}
        height={350}
        className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-50 rounded-lg"
      />
      <div className="relative p-4 sm:p-6 lg:p-8">
        <p className="text-sm font-medium uppercase tracking-widest text-rose-800">
          {title}
        </p>

        <p className="text-xl font-bold text-white sm:text-2xl">
          {camera.name}
        </p>

        <div className="">
          <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="text-sm text-white">
              {' '}
              Landing date: <span>{landing_date}</span>{' '}
            </p>
            <p className="text-sm text-white">
              {' '}
              Launch date: <span>{launch_date}</span>{' '}
            </p>
            <p className="text-sm text-white">
              {' '}
              Status: <span>{status}</span>{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoCard;
