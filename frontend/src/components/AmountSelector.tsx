import React, { useState, FunctionComponent } from "react";
import classNames from "classnames";

const NumberInput: FunctionComponent<NumberInputProps> = ({
  value,
  onChange,
  placeholder,
  disabled = false,
  className,
}) => {
  const inputClasses = classNames(
    "appearance-none bg-white border border-blue-500 rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500",
    {
      "opacity-50 cursor-not-allowed": disabled,
    },
    className
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (/^\d{0,2}$/.test(value) && value !== "00") {
      onChange(event);
    }
  };

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className={inputClasses}
      maxLength={2}
      pattern="\d{0,2}"
      inputMode="numeric"
    />
  );
};

const AmountSelector: React.FC<AmountSelectorProps> = ({ value, onChange }) => {
  const options = [1, 10, 50, 99];
  const [customValue, setCustomValue] = useState(value);

  const handleClick = (newValue: number) => {
    if (newValue !== customValue) {
      setCustomValue(newValue);
      onChange(newValue);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (!isNaN(newValue)) {
      setCustomValue(newValue);
      onChange(newValue);
    } else {
      setCustomValue(value);
    }
  };

  return (
    <div className="grid items-center justify-center">
      <div className="flex items-center justify-center">
        {options.map((optionValue) => (
          <button
            key={optionValue}
            onClick={() => handleClick(optionValue)}
            className={`mx-2 w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center text-4xl font-bold ${
              optionValue === customValue
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-600"
            }`}
          >
            {optionValue}
          </button>
        ))}
      </div>

      <NumberInput value={customValue} onChange={handleInputChange} />
    </div>
  );
};

export default AmountSelector;
