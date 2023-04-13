import GlassPaper from "@/components/GlassPaper";

import Hands from "./Hands";
import FFCStatus from "./FFCStatus";

const FFCDisplay = () => {
  return (
    <div className="grid gap-4">
      <GlassPaper>
        <FFCStatus />
      </GlassPaper>

      <Hands />

      <GlassPaper>
        <div className="flex flex-col items-center justify-center">
          <p className="text-xs md:text-base font-light text-center">
            and the Winner is...
          </p>

          <p className="text-xs md:text-2xl font-medium text-center">PLAYER</p>
        </div>
      </GlassPaper>
    </div>
  );
};

export default FFCDisplay;
