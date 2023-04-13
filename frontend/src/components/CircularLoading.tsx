import React, { FunctionComponent } from "react";
import classNames from "classnames";

interface CircularLoadingProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}

const CircularLoading: FunctionComponent<CircularLoadingProps> = ({
  size = 24,
  strokeWidth = 2,
  color = "currentColor",
  className,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  const indicatorClasses = classNames(
    "animate-spin rounded-full h-full w-full border-t-2 border-b-2 border-gray-400",
    className
  );

  return (
    <svg
      className={`animate-pulse -ml-1 mr-3 ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        className={indicatorClasses}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CircularLoading;
