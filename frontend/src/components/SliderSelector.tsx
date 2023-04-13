import { useState } from "react";

type SelectorProps = {
  value: number;
  onChange: (value: number) => void;
};

const SliderSelector = ({ value, onChange }: SelectorProps) => {
  const squares = Array.from({ length: 6 }).map((_, i) => i);
  const handleClick = (newValue: number) => {
    if (newValue !== value) {
      onChange(newValue);
    }
  };
  return (
    <div className="flex items-center justify-center">
      {squares.map((squareValue) => (
        <button
          key={squareValue}
          onClick={() => handleClick(squareValue)}
          className={`w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center text-4xl font-bold ${
            squareValue === value
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-600"
          }`}
        >
          {squareValue}
        </button>
      ))}
    </div>
  );
};

export default SliderSelector;
