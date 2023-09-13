import Image from 'next/image';

function WelcomeSection() {
  return (
    <section className="grid lg:grid-cols-2 m-10 md:m-20 w-[80%]">
      <header className="flex flex-col justify-center">
        <h2 className="text-4xl bg-gradient-radial from-orange-300 to-rose-800 bg-clip-text text-transparent font-bold">
          Welcome to Mars!
        </h2>
        <p className="mt-10 text-white">
          Mars is the fourth planet from the Sun – a dusty, cold, desert world
          with a very thin atmosphere. Mars is also a dynamic planet with
          seasons, polar ice caps, canyons, extinct volcanoes, and evidence that
          it was even more active in the past.
        </p>
        <p className="mt-6 text-white">
          Explore photos of Mars captured by various rovers. You can search
          using the sol date, earth date, or even filter by camera type. Dive in
          and enjoy the Martian landscapes!
        </p>
      </header>
      <div className="flex justify-end items-center w-full mt-10 lg:ml-24 xl:ml-36 2xl:ml-48">
        <Image
          src="/RedPlanet.jpg"
          width={800}
          height={800}
          alt="A captivating view of Mars, the red planet"
          className="rounded-lg"
          priority
        />
      </div>
    </section>
  );
}

export default WelcomeSection;
