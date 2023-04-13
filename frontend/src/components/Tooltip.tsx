import React, { useState } from "react";
import classNames from "classnames";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  const tooltipClasses = classNames(
    "absolute bg-gray-800 text-white px-2 py-1 rounded",
    {
      "opacity-0 pointer-events-none": !isTooltipVisible,
      "opacity-100 pointer-events-auto": isTooltipVisible,
    }
  );

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div className={tooltipClasses}>{text}</div>
    </div>
  );
};

export default Tooltip;
