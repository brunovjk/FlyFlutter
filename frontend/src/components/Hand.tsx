import React from "react";
import { Typography } from "@mui/material/";

// Define an array of emojis for each position of the hand
const HAND_EMOJIS = ["✊", "☝️", "🤘", "🤟", "👌", "🖐️"];

// Define the props for the Hand component
interface HandProps {
  side: "left" | "right";
  waiting?: boolean;
  number?: number;
}

// Define the Hand function component
const Hand: React.FC<HandProps> = ({ number }) => {
  const hand = number != undefined ? number : 0;

  return (
    <Typography variant="h1" align="center" sx={{ width: "124px" }}>
      {HAND_EMOJIS[hand]}
    </Typography>
  );
};

export default Hand;
