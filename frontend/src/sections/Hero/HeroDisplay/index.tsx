import React, { FC, useContext } from "react";

import { HeroDisplayAnimation } from "@/components/molecules";
import { Hands, HouseDisplay, ResultsDisplay } from "@/components/organisms";
import { HeroContext } from "../HeroContext";

const HeroDisplay: FC = () => {
  const { balances, inputs, results, waitingBet } = useContext(HeroContext);
  return (
    <HeroDisplayAnimation
      HouseDisplay={HouseDisplay}
      Hands={Hands}
      ResultsDisplay={ResultsDisplay}
      balances={balances}
      inputs={inputs}
      results={results}
      waitingBet={waitingBet}
    />
  );
};

export default HeroDisplay;
