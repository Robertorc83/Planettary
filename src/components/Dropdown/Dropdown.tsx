import {useState} from 'react';
import {BsChevronDown} from 'react-icons/bs';

type Option = {
  label: string;
  value: string;
  action?: () => void;
};

type DropdownProps = {
  id?: string;
  placeholder: string;
  options: Option[];
  selectedValue?: string | null;
  onValueChange?: (value: string | null) => void;
};

function Dropdown({
  id,
  placeholder,
  options,
  selectedValue,
  onValueChange,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (option: Option) => {
    if (option.value === 'RESET') {
      if (onValueChange) {
        onValueChange(null);
      }
    } else {
      if (onValueChange) {
        onValueChange(option.value);
      }
      if (option.action) {
        option.action();
      }
    }
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="relative w-36">
      <div className="w-36 inline-flex items-center overflow-hidden rounded-md border bg-white">
        <p className="w-full border-e px-1.5 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-700">
          {selectedValue || placeholder}
        </p>

        <button
          id={id}
          onClick={handleToggle}
          className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
          aria-haspopup="true">
          <span className="sr-only">Menu</span>
          <BsChevronDown />
        </button>
      </div>

      {isOpen && (
        <div
          className="z-10 mt-2 w-36 rounded-md border border-gray-100 bg-white shadow-lg"
          role="menu"
          aria-labelledby={id}
          tabIndex={0}>
          <div className="p-2">
            {options.map(option => (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 cursor-pointer"
                role="menuitem">
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
