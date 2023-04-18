import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import classNames from "classnames";

interface DialogProps {
  title: string;
  content: any;
  onAccept: () => void;
  isOpen: boolean;
  setIsOpenDialog: any;
}

const Dialog: FunctionComponent<DialogProps> = ({
  title,
  content,
  onAccept,
  isOpen,
  setIsOpenDialog,
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === dialogRef.current) {
      handleCancel();
    }
  };

  const handleAccept = async () => {
    setIsOpenDialog(false);
    await onAccept();
  };

  const handleCancel = () => {
    setIsOpenDialog(false);
  };

  const dialogClasses = classNames(
    "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50",
    {
      hidden: !isOpen,
    }
  );

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
        <div className="p-4">{content}</div>

        <div className="flex justify-end p-4">
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white rounded-full py-2 px-4 mr-2"
            onClick={handleCancel}
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
