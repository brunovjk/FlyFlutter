import Button from "@/components/Button";
import React from "react";

const FFCStatus: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row justify-center items-center">
      <div className="w-full flex items-center">
        <div className="w-full flex flex-col items-center">
          <span className="text-center font-light text-sm md:text-base mb-1">
            Your balance
          </span>
          <span className="text-center font-medium text-xl md:text-2xl">
            100
          </span>
        </div>

        <Button text="Mint" />
      </div>
      <div className="w-full flex items-center">
        <div className="w-full flex flex-col items-right">
          <span className="font-light text-sm md:text-base text-right">
            House Balance
          </span>
          <span className="font-light text-sm md:text-base text-right">
            Total betted
          </span>
          <span className="font-light text-sm md:text-base text-right">
            Total Lost
          </span>
        </div>

        <div className="w-full flex flex-col items-left">
          <span className="font-medium text-xl md:text-2xl ">10.015</span>
          <span className="font-medium text-xl md:text-2xl ">10</span>
          <span className="font-medium text-xl md:text-2xl ">0</span>
        </div>
      </div>
    </div>
  );
};

export default FFCStatus;
