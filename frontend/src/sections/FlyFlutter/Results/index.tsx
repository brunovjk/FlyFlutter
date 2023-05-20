import React, { FC, useContext, useState, useEffect } from "react";
import { FlyFlutterContext } from "../context";

import { Stack } from "@mui/material";
import Hands from "./Hands";
import HouseDisplay from "./HouseDisplay";
import ResultsDisplay from "./ResultsDisplay";

const Results: FC = () => {
  const { balances, inputs, results, waitingBet } =
    useContext(FlyFlutterContext);

  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (waitingBet) {
      setShowResults(true);
    }
  }, [waitingBet]);

  if (!showResults) {
    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding={{ xs: 1, md: 2 }}
        spacing={{ xs: 2, md: showResults ? 4 : 8 }}
      >
        <HouseDisplay balances={balances} />
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
      <HouseDisplay balances={balances} />
      <Hands inputs={inputs} results={results} waitingBet={waitingBet} />
      {showResults && (
        <ResultsDisplay results={results} waitingBet={waitingBet} />
      )}
    </Stack>
  );
};

export default Results;
