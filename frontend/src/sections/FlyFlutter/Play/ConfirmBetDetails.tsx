import React, { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { guessConverter } from "../../../helpers";
import { formatEther } from "ethers/lib/utils.js";

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
      <Typography>{`Selected Bet Amount: ${inputs.amount} FFC`}</Typography>
      <Typography>{`Bet Fee: ${formatEther(
        balances.betFee
      ).toString()} MATIC`}</Typography>
    </Stack>
  );
};

export default ConfirmBetDetails;
