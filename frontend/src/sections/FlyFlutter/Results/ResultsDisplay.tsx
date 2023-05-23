import React, { FC } from "react";
import { CardDisplayBet, CardDisplayResult } from "../../../components";
import { Stack } from "@mui/material";
import { guessConverter, houseConverter } from "../../../helpers";

const Results: FC<ResultsDisplayProps> = ({ results, waitingBet }) => {
  const playerGuess = guessConverter(results.playerGuess);
  // The house bets against the Player
  const houseGuess = houseConverter(results.playerGuess);

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
        label="Player"
        guess={playerGuess}
        hand={playerHand?.toString()}
        tooltip="Your last bet"
      />
      <CardDisplayResult
        shaking={waitingBet}
        label={waitingBet ? "waiting Bet..." : "Last Bet"}
        winner={winner}
        tooltip={
          waitingBet
            ? "Waiting QRNG and Gelato, you can close this page anytime. You can check all you bets at History tab."
            : "Winner of last bet"
        }
      />
      <CardDisplayBet
        label="House"
        guess={houseGuess}
        hand={houseHand?.toString()}
        tooltip="House Hand"
      />
    </Stack>
  );
};

export default Results;
