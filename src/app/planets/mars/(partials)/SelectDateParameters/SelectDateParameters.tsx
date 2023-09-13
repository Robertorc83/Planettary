import {useState} from 'react';

import {BsFillArrowRightSquareFill, BsChevronUp} from 'react-icons/bs';
import {DatePicker} from '@/components/DatePicker';
import {InputNumber} from '@/components/InputNumber';
import {Radio} from '@/components/Radio';
import {useSearchNasa} from '@/hooks/useSearchNasa';

type SelectDateParametersProps = {
  containerStyles?: string;
};

function SelectDateParameters({containerStyles}: SelectDateParametersProps) {
  const [selectedParam, setSelectedParam] = useState<string | null>('');
  const [showDateOptions, setShowDateOptions] = useState(false);
  const {solDate, earthDate, setEarthDate, setSolDate} = useSearchNasa();

  const onChangeSolDate = (value: string | null) => {
    if (value) {
      setSelectedParam(value);
      setEarthDate({startDate: null, endDate: null});
    } else {
      setSelectedParam(null);
    }
  };

  const onChangeEarthDate = (value: string | null) => {
    if (value) {
      setSelectedParam(value);
      setSolDate(null);
    } else {
      setSelectedParam(null);
    }
  };

  return (
    <div className={`${containerStyles}`}>
      <span
        className="flex text-white text-sm"
        onClick={() => setShowDateOptions(!showDateOptions)}>
        Select Date * :
        <BsChevronUp
          className={`ml-2 transition-transform duration-300 cursor-pointer ${
            showDateOptions ? '' : 'transform rotate-180'
          }`}
        />
      </span>
      {showDateOptions && (
        <div className="grid mt-5" aria-label="Date selection">
          <div className="flex flex-col mt-2 space-y-5">
            <Radio
              label="Add Sol date"
              value="Sol"
              name="param"
              checkedValue={selectedParam}
              onChange={onChangeSolDate}
              width="w-36"
            />
            <Radio
              label="Add Earth Date"
              value="Earth"
              name="param"
              checkedValue={selectedParam}
              onChange={onChangeEarthDate}
              width="w-36"
            />
            <div>
              {selectedParam === 'Sol' && (
                <div className="flex -ml-12">
                  <div className="flex items-center">
                    <BsFillArrowRightSquareFill className="text-white h-6 w-6" />
                  </div>
                  <InputNumber
                    id={'SolDate'}
                    placeholder={'Ex.- 2890'}
                    width={'w-36 ml-6'}
                    value={solDate || ''}
                    onChange={setSolDate}
                  />
                </div>
              )}
              {selectedParam === 'Earth' && (
                <div className="flex -ml-12">
                  <div className="flex items-center ">
                    <BsFillArrowRightSquareFill className="text-white h-6 w-6" />
                  </div>
                  <DatePicker
                    value={earthDate}
                    setValue={setEarthDate}
                    styles={'ml-6'}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectDateParameters;
