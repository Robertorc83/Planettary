'use client';

interface Props {
  error: Error;
  reset: () => void;
}

const AuthError = ({error, reset}: Props) => {
  return (
    <div
      className=" flex items-center justify-center w-screen h-screen bg-gray-800
  ">
      <div className="px-40 py-20 bg-white rounded-md shadow-xl">
        <div className="flex flex-col items-center">
          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-rose-800">Oops!</span> There has been an error
          </h6>

          <p className="mb-8 text-center text-gray-500 md:text-lg">
            {error.message}
          </p>

          <button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
            className="text-rose-800">
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthError;
