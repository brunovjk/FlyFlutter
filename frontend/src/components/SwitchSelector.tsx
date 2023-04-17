import React from "react";
import classNames from "classnames";

interface SwitchSelector {
  value: number | string;
  onChange: (value: any) => void;
  options: number[] | string[];
  className?: any;
}

const SwitchSelector: React.FC<SwitchSelector> = ({
  value,
  onChange,
  options,
  className,
}) => {
  const buttonClasses = (option: number | string) =>
    classNames(
      "px-4 py-2 rounded-full text-center cursor-pointer transition-all duration-150",
      {
        "bg-blue-500 text-white": value === option,
        "bg-white text-blue-500 hover:bg-gray-200": value !== option,
      }
    );

  const handleSwitcherChange = (value: number | string) => {
    onChange(value);
  };

  return (
    <div className={classNames("flex justify-center items-center", className)}>
      {options.map((option, index) => (
        <button
          key={index}
          className={buttonClasses(option)}
          onClick={() => handleSwitcherChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SwitchSelector;
