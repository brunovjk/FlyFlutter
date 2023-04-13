import React from "react";
import classNames from "classnames";

interface GlassPaperProps {
  className?: string;
  children?: React.ReactNode;
}

const GlassPaper: React.FC<GlassPaperProps> = ({ className, children }) => {
  const glassPaperClasses = classNames(
    "w-full h-full bg-white bg-opacity-10 rounded-lg shadow-lg p-6",
    className
  );

  return <div className={glassPaperClasses}>{children}</div>;
};

export default GlassPaper;
