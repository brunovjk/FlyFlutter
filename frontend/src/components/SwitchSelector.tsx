import React from "react";
import classNames from "classnames";

interface ButtonSwitcherProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  className?: string;
}

const SwitchSelector: React.FC<ButtonSwitcherProps> = ({
  value,
  onChange,
  options,
  className,
}) => {
  const buttonClasses = (option: string) =>
    classNames(
      "px-4 py-2 rounded-full text-center cursor-pointer transition-all duration-150",
      {
        "bg-blue-500 text-white": value === option,
        "bg-white text-blue-500 hover:bg-gray-200": value !== option,
      }
    );

  const handleSwitcherChange = (value: string) => {
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
