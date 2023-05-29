import React, { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { guessConverter } from "../../../helpers";
import { formatEther } from "ethers/lib/utils.js";

const ConfirmBetDetails: FC<{
  balances: BalancesProps;
  inputs: InputsProps;
}> = ({ balances, inputs }) => {
  const { t } = useTranslation();

  return (
    <Stack spacing={4}>
      <Typography>
        {t("confirmBet.selectedGuess", {
          guess: guessConverter(inputs.guess, t),
        })}
      </Typography>
      <Typography>
        {t("confirmBet.selectedHand", { hand: inputs.hand })}
      </Typography>
      <Typography>
        {t("confirmBet.selectedBetAmount", { amount: inputs.amount })}
      </Typography>
      <Typography>
        {t("confirmBet.betFee", {
          fee: formatEther(balances.betFee).toString(),
        })}
      </Typography>
    </Stack>
  );
};

export default ConfirmBetDetails;
