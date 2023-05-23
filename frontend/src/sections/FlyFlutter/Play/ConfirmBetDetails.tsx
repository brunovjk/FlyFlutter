import React, { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { guessConverter } from "../../../helpers";

const ConfirmBetDetails: FC<{
  balances: BalancesProps;
  inputs: InputsProps;
}> = ({ balances, inputs }) => {
  return (
    <Stack spacing={4}>
      <Typography>{`Selected Guess: ${guessConverter(
        inputs.guess
      )}`}</Typography>
      <Typography>{`Selected Hand: ${inputs.hand}`}</Typography>
      <Typography>{`Selected Bet Amount: ${inputs.amount}`}</Typography>
      <Typography>{`Bet Fee: ${balances.betFee.toString()}`}</Typography>
    </Stack>
  );
};

export default ConfirmBetDetails;
