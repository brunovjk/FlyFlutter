import React, { FC } from "react";
import {
  CardDisplayBet,
  CardDisplayResult,
  ShakingBox,
} from "../../../components";
import { Stack } from "@mui/material";
import { guessConverter, houseConverter } from "../../../helpers";
import { useTranslation } from "react-i18next";

const Results: FC<ResultsDisplayProps> = ({ results, waitingBet }) => {
  const { t } = useTranslation();

  const playerGuess = guessConverter(results.playerGuess, t);
  // The house bets against the Player
  const houseGuess = houseConverter(results.playerGuess, t);

  const playerHand = results.playerHand;
  const houseHand = results.houseHand;

  const winner = results.winner;

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
      sx={{ width: "100%" }}
    >
      <CardDisplayBet
        label={t("results.playerLabel")}
        guess={playerGuess}
        hand={playerHand?.toString()}
        tooltip={t("results.playerTooltip")}
      />
      <ShakingBox shake={waitingBet}>
        <CardDisplayResult
          label={
            waitingBet
              ? t("results.waitingBetLabel")
              : t("results.lastBetLabel")
          }
          winner={winner}
          tooltip={
            waitingBet
              ? t("results.waitingBetTooltip")
              : t("results.lastBetTooltip")
          }
        />
      </ShakingBox>

      <ShakingBox shake={waitingBet && houseHand == undefined}>
        <CardDisplayBet
          label={t("results.houseLabel")}
          guess={houseGuess}
          hand={houseHand?.toString()}
          tooltip={t("results.houseTooltip")}
        />
      </ShakingBox>
    </Stack>
  );
};

export default Results;
