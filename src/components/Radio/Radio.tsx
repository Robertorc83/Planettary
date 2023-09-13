type RadioProps = {
  label: string;
  value: string;
  width?: string;
  name: string;
  checkedValue: string | null;
  onChange: (value: string | null) => void;
};

function Radio({
  label,
  value,
  width = 'w-full',
  name,
  checkedValue,
  onChange,
}: RadioProps) {
  const handleLabelClick = () => {
    const newValue = checkedValue === value ? null : value;
    onChange(newValue);
  };

  return (
    <div>
      <input
        type="radio"
        name={name}
        value={value}
        id={value}
        className="peer hidden"
        checked={checkedValue === value}
        readOnly
      />

      <label
        htmlFor={value}
        onClick={handleLabelClick}
        className={`flex cursor-pointer items-center ${width} justify-between rounded-lg border-2 border-gray-100 bg-white p-2 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-rose-800 peer-checked:ring-2 peer-checked:ring-orange-300`}>
        <p className="text-gray-700">{label}</p>
      </label>
    </div>
  );
}

export default Radio;
