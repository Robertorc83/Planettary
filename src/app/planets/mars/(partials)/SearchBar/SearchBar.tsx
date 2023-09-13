import {SelectRover} from '../SelectRover';
import {SelectDateParameters} from '../SelectDateParameters';
import {Dispatch, SetStateAction, useState} from 'react';
import {FilterDropdown} from '../FilterDropdown';

import {BsStarFill} from 'react-icons/bs';
import {useSearchNasa} from '@/hooks/useSearchNasa';
import {Button} from '@/components/Button';

type SearchBarProps = {
  setNewSearchInitiated: Dispatch<SetStateAction<boolean>>;
};

function SearchBar({setNewSearchInitiated}: SearchBarProps) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const {addFavorite, selectedRover, solDate, earthDate} = useSearchNasa();

  const onSubmit = () => {
    setNewSearchInitiated(true);
  };

  const handleAddFavorite = () => {
    const searchParams = {
      rover: selectedRover,
      solDate,
      earthDate,
    };
    addFavorite(searchParams);
    setButtonClicked(true);
    setTimeout(() => {
      setButtonClicked(false);
    }, 1000);
  };

  return (
    <section className="flex flex-col items-start ml-10 h-full pb-40">
      <h2 className="px-10 text-2xl bg-gradient-radial from-orange-300 to-rose-800 bg-clip-text text-transparent font-bold">
        Search Photos
      </h2>
      <div className="grid row-cols-12 py-10 px-10 space-y-5">
        <div className="relative row-span-4">
          <SelectRover />
        </div>
        <div className="row-span-5">
          <SelectDateParameters />
        </div>
        <div className="row-span-3">
          <FilterDropdown />
        </div>
      </div>
      <div className="flex flex-col items-start row-span-2 ml-10 space-y-4">
        <div>
          <Button onSubmit={onSubmit} text={'Search'} width="w-36" />
        </div>
        <div>
          <Button
            onSubmit={handleAddFavorite}
            width="w-36"
            tooltip="Add to favorites"
            isSecondary
            aria-label="Add to favorites">
            <BsStarFill
              className={`h-6 w-6 transition-colors duration-500 ${
                buttonClicked && selectedRover
                  ? 'text-orange-300'
                  : 'text-white'
              }`}
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
