import { CardBalance } from "@/components/molecules";
import { Stack } from "@mui/material";
import React, { FC } from "react";

const HouseDisplay: FC<HouseDisplayProps> = ({ balances }) => {
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
        label="House"
        value={houseBalance}
        tooltip="Total amount of FlyFluterCoin held by the House"
      />
      <CardBalance
        label="Total Bet"
        value={totalBetted}
        tooltip="Total amount of FlyFluterCoin bet by the House with the players"
      />
      <CardBalance
        label="Total Sent"
        value={totalLost}
        tooltip="Total amount of FlyFlutterCoin sent by the house to bet winners"
      />
    </Stack>
  );
};

export default HouseDisplay;
