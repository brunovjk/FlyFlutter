import React from "react";
import classNames from "classnames";

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number | string;
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "100%",
  borderRadius = "0",
  className,
}) => {
  const skeletonClasses = classNames("bg-gray-200 animate-pulse", className);

  return (
    <div
      className={skeletonClasses}
      style={{ width, height, borderRadius }}
    ></div>
  );
};

export default Skeleton;
