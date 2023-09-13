import {Dropdown} from '@/components/Dropdown';
import {useSearchNasa} from '@/hooks/useSearchNasa';
import {useState} from 'react';
import {BsChevronUp} from 'react-icons/bs';

const options = [
  {label: 'Reset', value: 'RESET'},
  {label: 'FHAZ', value: 'FHAZ'},
  {label: 'RHAZ', value: 'RHAZ'},
  {label: 'MAST', value: 'MAST'},
  {label: 'CHEMCAM', value: 'CHEMCAM'},
  {label: 'MAHLI', value: 'MAHLI'},
  {label: 'MARDI', value: 'MARDI'},
  {label: 'NAVCAM', value: 'NAVCAM'},
  {label: 'PANCAM', value: 'PANCAM'},
  {label: 'MINITES', value: 'MINITES'},
];

function FilterDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);
  const {selectedCamera, setSelectedCamera} = useSearchNasa();

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <span
        className="flex items-center text-white text-sm cursor-pointer"
        onClick={handleShowDropdown}>
        Filter by camera
        <BsChevronUp
          className={`ml-2 transition-transform duration-300 ${
            showDropdown ? '' : 'transform rotate-180'
          }`}
        />
      </span>
      {showDropdown && (
        <div className="col-span-2 mt-2">
          <Dropdown
            id="cameraDropdown"
            placeholder="Select"
            options={options}
            selectedValue={selectedCamera}
            onValueChange={setSelectedCamera}
            aria-label="Camera filter dropdown"
          />
        </div>
      )}
    </div>
  );
}

export default FilterDropdown;
