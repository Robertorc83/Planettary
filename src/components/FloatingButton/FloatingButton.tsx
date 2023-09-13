import React from 'react';
import {BsStarFill} from 'react-icons/bs';

type FloatingButtonProps = {
  onClick: () => void;
};

const FloatingButton: React.FC<FloatingButtonProps> = ({onClick}) => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2">
      <button
        onClick={onClick}
        className="relative bg-gray-600 text-white p-2 rounded-l-lg shadow-md cursor-pointer hover:bg-gray-700 flex items-center transition-all duration-300 w-12 h-12 hover:w-48"
        aria-label="Open Favorites">
        <BsStarFill className="h-5 w-5 absolute left-2 top-1/2 transform -translate-y-1/2" />
        <span className="ml-2 opacity-0 hover:opacity-100 transition-opacity duration-300 absolute left-8 top-1/2 transform -translate-y-1/2 text-sm">
          Favorite Searches
        </span>
      </button>
    </div>
  );
};

export default FloatingButton;
