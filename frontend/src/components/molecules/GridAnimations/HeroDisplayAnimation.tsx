import React, { FC, useState, useEffect } from "react";

import { Stack } from "@mui/material";

import { useConnectionSync } from "@/hooks";

interface HeroDisplayAnimationProps {
  HouseDisplay: FC<HouseDisplayProps>;
  Hands: FC<DisplayProps>;
  ResultsDisplay: FC<ResultsDisplayProps>;
  balances: BalancesProps;
  inputs: InputsProps;
  results: ResultsProps;
  waitingBet: boolean;
}

const HeroDisplayAnimation: FC<HeroDisplayAnimationProps> = ({
  HouseDisplay,
  Hands,
  ResultsDisplay,
  balances,
  inputs,
  results,
  waitingBet,
}) => {
  const isConnected = useConnectionSync();
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (isConnected && waitingBet) {
      setShowResults(true);
    }
  }, [isConnected, waitingBet]);

  if (!isConnected || !showResults) {
    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding={{ xs: 1, md: 2 }}
        spacing={{ xs: 2, md: showResults ? 4 : 8 }}
      >
        {isConnected && <HouseDisplay balances={balances} />}
        <Hands inputs={inputs} results={results} waitingBet={waitingBet} />
      </Stack>
    );
  }

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      padding={{ xs: 1, md: 2 }}
      spacing={{ xs: 2, md: showResults ? 4 : 8 }}
    >
      {isConnected && <HouseDisplay balances={balances} />}
      <Hands inputs={inputs} results={results} waitingBet={waitingBet} />
      {showResults && (
        <ResultsDisplay results={results} waitingBet={waitingBet} />
      )}
    </Stack>
  );
};

export default HeroDisplayAnimation;
