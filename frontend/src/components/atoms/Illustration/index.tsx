import React from "react";
import Box from "@mui/material/Box";

interface IllustrationProps {
  svgPath: string;
  altText: string;
}

const Illustration: React.FC<IllustrationProps> = ({ svgPath, altText }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <img src={svgPath} alt={altText} />
    </Box>
  );
};

export default Illustration;
