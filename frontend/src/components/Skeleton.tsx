import React from "react";
import classNames from "classnames";

const Skeleton = ({}) => {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className="h-8 bg-red-200 rounded-lg"></div>
    </div>
  );
};

export default Skeleton;
