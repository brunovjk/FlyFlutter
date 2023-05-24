import React, { FC, useContext, useState, useEffect } from "react";
import { FlyFlutterContext } from "../context";

import { Stack } from "@mui/material";
import Hands from "./Hands";
import HouseDisplay from "./HouseDisplay";
import ResultsDisplay from "./ResultsDisplay";
import { TransactionBox } from "../../../components";

const Results: FC = () => {
  const { balances, inputs, results, waitingBet } =
    useContext(FlyFlutterContext);

  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (waitingBet) {
      setShowResults(true);
    }
  }, [waitingBet]);

  const hideBox: React.CSSProperties = {
    opacity: 0,
  };

  const showBox: React.CSSProperties = {
    opacity: 1,
  };

  return (
    <Stack
      sx={{
        height: "100%",
      }}
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <HouseDisplay balances={balances} />
      <Hands inputs={inputs} results={results} waitingBet={waitingBet} />

      <TransactionBox
        controlStyle={showResults}
        initialStyle={hideBox}
        falseStyle={hideBox}
        trueStyle={showBox}
      >
        <ResultsDisplay results={results} waitingBet={waitingBet} />
      </TransactionBox>
    </Stack>
  );
};

export default Results;
