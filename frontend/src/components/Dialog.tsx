import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import classNames from "classnames";

interface DialogProps {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  onAccept: () => void;
  isOpen: boolean;
}

const Dialog: FunctionComponent<DialogProps> = ({
  title,
  text1,
  text2,
  text3,
  text4,
  onAccept,
  isOpen,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [isOpenState, setIsOpenState] = useState(isOpen);

  useEffect(() => {
    setIsOpenState(isOpen);
  }, [isOpen]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === dialogRef.current) {
      setIsOpenState(false);
    }
  };

  const dialogClasses = classNames(
    "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50",
    {
      hidden: !isOpenState,
    }
  );

  const handleAccept = async () => {
    setIsOpenState(false);
    await onAccept();
  };

  return (
    <div
      className={dialogClasses}
      ref={dialogRef}
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-lg w-full md:w-1/2">
        <div className="bg-gray-700 text-white rounded-t-lg py-2 px-4 font-bold">
          {title}
        </div>
        <div className="p-4">{text1}</div>
        <div className="p-4">{text2}</div>
        <div className="p-4">{text3}</div>
        <div className="p-4">{text4}</div>
        <div className="flex justify-end p-4">
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white rounded-full py-2 px-4 mr-2"
            onClick={() => setIsOpenState(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-4"
            onClick={handleAccept}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
