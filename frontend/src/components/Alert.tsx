import React, { useState, useEffect } from "react";
import classNames from "classnames";

interface AlertProps {
  type: "info" | "success" | "warning" | "error";
  message: string;
  duration?: number;
  className?: string;
}

const Alert: React.FC<AlertProps> = ({
  type = "info",
  message = "Alert popup",
  duration = 5000,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpen(false);
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [duration]);

  const alertClasses = classNames(
    "fixed bottom-4 left-4 bg-blue-500 text-white border border-gray-300 rounded-full shadow-md px-4 py-3",
    {
      "bg-green-100 text-green-800 border-green-300": type === "success",
      "bg-red-100 text-red-800 border-red-300": type === "error",
      "opacity-100": isOpen,
      "opacity-0": !isOpen,
      "pointer-events-none": !isOpen,
      "transition-opacity duration-300": true,
    },
    className
  );

  return (
    <div className={alertClasses}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
