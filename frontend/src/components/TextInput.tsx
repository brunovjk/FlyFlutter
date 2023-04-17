import React, { FunctionComponent } from "react";
import classNames from "classnames";

interface TextInputProps {
  value: string | number;
  onChange: (value: any) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const TextInput: FunctionComponent<TextInputProps> = ({
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
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      className={inputClasses}
      disabled={disabled}
    />
  );
};

export default TextInput;
