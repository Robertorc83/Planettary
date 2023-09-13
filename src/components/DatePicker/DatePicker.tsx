import React from 'react';
import Datepicker, {DateValueType} from 'react-tailwindcss-datepicker';

type DatePickerProps = {
  value: DateValueType;
  setValue: React.Dispatch<React.SetStateAction<DateValueType>>;
  styles?: string;
};

function DatePicker({value, setValue, styles}: DatePickerProps) {
  const handleValueChange = (newValue: DateValueType) => {
    setValue(newValue);
  };

  return (
    <Datepicker
      placeholder="Select Date"
      containerClassName="relative w-36"
      inputClassName={`relative w-36 bg-white py-2.5 pl-2 rounded-lg border-gray-200 focus:outline-none shadow-sm sm:text-sm border focus:border-rose-800 focus:ring-1 focus:ring-orange-300 flex ${styles}`}
      toggleClassName="absolute -right-4 text-gray-500 top-2.5"
      useRange={false}
      asSingle={true}
      value={value}
      maxDate={new Date()}
      onChange={handleValueChange}
    />
  );
}
export default DatePicker;
