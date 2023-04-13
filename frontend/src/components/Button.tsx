import React, { FunctionComponent } from "react";
import classNames from "classnames";
import CircularLoading from "./CircularLoading";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button: FunctionComponent<ButtonProps> = ({
  text = "Button",
  onClick,
  isLoading = false,
  disabled = false,
  className,
}) => {
  const buttonClasses = classNames(
    "w-full inline-block bg-blue-500 text-white rounded-full py-2 px-4",
    {
      "opacity-50 cursor-not-allowed": disabled || isLoading,
    },
    className
  );

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? <CircularLoading /> : text}
    </button>
  );
};

export default Button;
