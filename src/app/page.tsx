import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="grid h-screen mt-10 md:mt-0 md:h-[90vh] md:grid-cols-2 items-start md:items-center px-4 md:px-36 justify-items-center">
      <div className="flex flex-col items-center md:items-start">
        <div className="w-full md:w-[80%] flex flex-col justify-center items-center md:items-start">
          <h1 className="text-2xl md:text-3xl font-bold sm:text-4xl lg:text-6xl lg:leading-tight text-white text-center md:text-left">
            Start your astronomy journey
          </h1>
          <p className="mt-3 text-lg text-gray-400 text-center md:text-left">
            This app shows you the best images of mars coming directly from the
            NASA website
          </p>
          <div className="mt-7 grid gap-3 w-full md:inline-flex justify-items-center ">
            <Link
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-b from-orange-300 to-rose-800 hover:opacity-80 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
              href="/planets/mars">
              Get started
              <svg
                className="w-2.5 h-2.5 ml-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none">
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className=" max-w-[400px] md:max-w-auto 2xl:max-w-[550px] 2xl:mx-auto">
        <Image
          src={'/marsvertical.png'}
          width={400}
          height={500}
          layout="responsive"
          className="rounded-xl z-30 relative"
          alt="Astronaut in Mars"
        />
      </div>
    </main>
  );
}
