import Link from 'next/link';

function NotFoundPage() {
  return (
    <div
      className="
    flex
    items-center
    justify-center
    w-screen
    h-[90vh]
    bg-gray-800
  ">
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h1 className="font-bold bg-gradient-radial from-orange-300 to-rose-800 bg-clip-text text-transparent text-9xl">
            404
          </h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            Oops! Wrong Planet
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          <Link
            href="/"
            className="px-6 py-2 text-sm font-semibold text-white bg-gray-800">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
