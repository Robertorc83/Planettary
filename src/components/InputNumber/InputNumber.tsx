import {SolDate} from '@/types/Nasa';
import React from 'react';

type InputNumberProps = {
  id: string;
  placeholder: string;
  label?: string;
  width?: string;
  value: number | string | SolDate;
  onChange: (value: number) => void;
};

function InputNumber({
  id,
  placeholder,
  label,
  width,
  value,
  onChange,
}: InputNumberProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value)); // Convert string to number and call onChange
  };

  return (
    <div className="relative">
      {label && (
        <label htmlFor={id} className="block text-white">
          {' '}
          {label}{' '}
        </label>
      )}
      <input
        type="number"
        id={id}
        min={0}
        max={2023}
        list="defaultNumbers"
        value={value as string}
        onChange={handleInputChange}
        placeholder={placeholder}
        className={`${
          width ? width : 'w-full'
        } rounded-md border-gray-200 focus:outline-none px-4 shadow-sm sm:text-sm py-2 border pt-3 focus:border-rose-800 focus:ring-1 focus:ring-orange-300`}
      />

      <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500"></span>
      <datalist id="defaultNumbers">
        <option value="10045678"></option>
        <option value="103421"></option>
        <option value="11111111"></option>
        <option value="12345678"></option>
        <option value="12999922"></option>
      </datalist>
    </div>
  );
}

export default InputNumber;
