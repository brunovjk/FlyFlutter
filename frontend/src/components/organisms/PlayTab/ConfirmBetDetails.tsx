import React, { FC } from "react";
import { Stack, Typography } from "@mui/material";

const ConfirmBetDetails: FC<{ context: any; betFee: any }> = ({
  context,
  betFee,
}) => {
  const selectedGuess = context.inputs.guess === 0 ? "Even" : "Odd";

  return (
    <Stack spacing={4}>
      <Typography>{`Selected Guess: ${selectedGuess}`}</Typography>
      <Typography>{`Selected Hand: ${context.inputs.hand}`}</Typography>
      <Typography>{`Selected Bet Amount: ${context.inputs.amount}`}</Typography>
      <Typography>{`Bet Fee: ${betFee.showFee}`}</Typography>
    </Stack>
  );
};

export default ConfirmBetDetails;
