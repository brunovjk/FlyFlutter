import React, { FC } from "react";
import { CardBalance } from "../../../components";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const HouseDisplay: FC<HouseDisplayProps> = ({ balances }) => {
  const { t } = useTranslation();
  const houseBalance = balances.house;
  const totalBetted = balances.totalBetted;
  const totalLost = balances.totalLost;

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <CardBalance
        label={t("houseDisplay.houseLabel")}
        value={houseBalance}
        tooltip={t("houseDisplay.houseTooltip")}
      />
      <CardBalance
        label={t("houseDisplay.totalBetLabel")}
        value={totalBetted}
        tooltip={t("houseDisplay.totalBetTooltip")}
      />
      <CardBalance
        label={t("houseDisplay.totalSentLabel")}
        value={totalLost}
        tooltip={t("houseDisplay.totalSentTooltip")}
      />
    </Stack>
  );
};

export default HouseDisplay;
