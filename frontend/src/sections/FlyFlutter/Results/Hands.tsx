import React, { FC } from "react";
import { Hand } from "../../../components";
import { Stack } from "@mui/material";

const Hands: FC<DisplayProps> = ({ inputs, results, waitingBet }) => {
  const inputsPlayerHand = inputs.hand;
  const resultsPlayerHand = results.playerHand;
  const playerHand = waitingBet
    ? resultsPlayerHand ?? inputsPlayerHand
    : inputsPlayerHand || resultsPlayerHand;
  const houseHand = results.houseHand;

  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{
        padding: { xs: 1, md: 2 },
        height: "100%",
      }}
      spacing={{ xs: 2, md: 4 }}
    >
      <Hand side="left" waiting={waitingBet} number={playerHand} />
      <Hand side="right" waiting={waitingBet} number={houseHand} />
    </Stack>
  );
};

export default Hands;
