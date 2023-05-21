import React from "react";
import { Box } from "@mui/material";

interface SVGBoxProps {
  svgPath: string;
  svgAlt: string;
  styles?: React.CSSProperties;
}

const SVGBox: React.FC<SVGBoxProps> = ({ svgPath, svgAlt, styles }) => {
  const svgUrl = process.env.PUBLIC_URL + svgPath;

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={styles}
    >
      <img src={svgUrl} alt={svgAlt} style={{ width: "100%" }} />
    </Box>
  );
};

export default SVGBox;
