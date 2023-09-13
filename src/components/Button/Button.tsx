import {useState} from 'react';

type ButtonProps = {
  onSubmit: () => void;
  text?: string;
  width?: string;
  isSecondary?: boolean;
  children?: React.ReactNode;
  tooltip?: string;
};

function Button({
  onSubmit,
  text,
  width,
  isSecondary,
  children,
  tooltip,
}: ButtonProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  // Constructing the className string based on the props
  let buttonClass = width || 'w-48';
  buttonClass += ' inline-flex justify-center items-center gap-x-3 text-center';
  buttonClass += isSecondary
    ? ' bg-gray-600'
    : ' bg-gradient-to-b from-orange-300 to-rose-800';
  buttonClass +=
    ' hover:opacity-80 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-4';

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={onSubmit}
        className={buttonClass}>
        {text && !children && text}
        {children}
      </button>
      {tooltip && showTooltip && (
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2.5rem] bg-white text-gray-800 text-xs rounded px-2 py-1">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-1 w-0 h-0 border-2 border-white border-t-0 border-l-transparent border-r-transparent"></div>
          {tooltip}
        </div>
      )}
    </div>
  );
}

export default Button;
