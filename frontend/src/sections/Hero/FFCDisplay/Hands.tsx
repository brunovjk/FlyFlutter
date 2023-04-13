import React from "react";

const Hands: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-wiggle mr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.707 11.707a1 1 0 0 0 0 1.414L9.414 15l-1.707 1.707a1 1 0 1 0 1.414 1.414L11 16.414l1.707 1.707a1 1 0 0 0 1.414-1.414L12.414 15l1.707-1.707a1 1 0 1 0-1.414-1.414L11 13.586l-1.707-1.707a1 1 0 0 0-1.414 0zM10 0a1 1 0 0 0 1 1h3.586a1 1 0 0 0 .707-.293l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3A1 1 0 0 0 10.586 1H14a1 1 0 0 0 0-2h-4a1 1 0 0 0-1 1z"
          />
        </svg>
      </div>
      <div className="animate-wiggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.293 8.293a1 1 0 0 0-1.414 1.414L8.586 11 6.879 12.707a1 1 0 1 0 1.414 1.414L10 12.414l1.707 1.707a1 1 0 0 0 1.414-1.414L11.414 11l1.707-1.707a1 1 0 0 0-1.414-1.414L10 9.586 8.293 7.879a1 1 0 0 0 0 1.414zM10 18a1 1 0 0 0-1-1H5.414a1 1 0 0 0-.707.293l-3 3a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l3-3A1 1 0 0 0 10.586 19H7a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hands;
