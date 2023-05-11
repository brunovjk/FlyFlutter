import React from "react";
import { CustomTypography } from "@/components/atoms";
import { Box } from "@mui/material/";

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
    <CustomTypography variant="h1" align="center" sx={{ width: "124px" }}>
      {HAND_EMOJIS[hand]}
    </CustomTypography>
  );
};

export default Hand;

// import { CustomTypography } from "@/components/atoms";
// import { Stack } from "@mui/material";
// import React, { FC } from "react";

// interface HandProps {
//   side: "left" | "right";
//   waiting?: boolean;
//   number?: number;
// }

// const Hand: FC<HandProps> = ({ side, waiting, number }) => {
//   return (
//     <Stack>
//       <CustomTypography variant="h1">👋</CustomTypography>
//       <CustomTypography>
//         {number ? `Hand: ${number.toString()}` : "Hand: undefined"}
//       </CustomTypography>
//       <CustomTypography>
//         {waiting ? "Waiting: true" : "Waiting: false"}
//       </CustomTypography>
//     </Stack>
//   );
// };

// export default Hand;
