import {useState} from 'react';
import {Radio} from '@/components/Radio';
import {useSearchNasa} from '@/hooks/useSearchNasa';
import {BsChevronDown} from 'react-icons/bs';

type SelectRoverProps = {
  styles?: string;
};

function SelectRover({styles}: SelectRoverProps) {
  const {selectedRover, setSelectedRover} = useSearchNasa();
  const [showRadios, setShowRadios] = useState(false);

  return (
    <fieldset className={styles}>
      <legend
        className="flex items-center text-white text-sm cursor-pointer"
        onClick={() => setShowRadios(!showRadios)}>
        Select Rover *
        <BsChevronDown
          className={`ml-2 transition-transform duration-300 ${
            showRadios ? 'transform rotate-180' : ''
          }`}
        />
      </legend>
      {showRadios && (
        <div className="grid grid-rows-3 gap-y-5 mt-5 items-center">
          <Radio
            label="Curiosity"
            value="Curiosity"
            name="rover"
            checkedValue={selectedRover}
            onChange={setSelectedRover}
            width="w-36"
          />
          <Radio
            label="Opportunity"
            value="Opportunity"
            name="rover"
            checkedValue={selectedRover}
            onChange={setSelectedRover}
            width="w-36"
          />
          <Radio
            label="Spirit"
            value="Spirit"
            name="rover"
            checkedValue={selectedRover}
            onChange={setSelectedRover}
            width="w-36"
          />
        </div>
      )}
    </fieldset>
  );
}

export default SelectRover;
