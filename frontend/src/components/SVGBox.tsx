import React from "react";
import Box from "@mui/material/Box";

interface SVGBoxProps {
  svgPath: string;
  svgAlt: string;
  styles?: React.CSSProperties;
}

const SVGBox: React.FC<SVGBoxProps> = ({ svgPath, svgAlt, styles }) => {
  return (
    <Box
      component="img"
      src={svgPath}
      alt={svgAlt}
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={styles}
    />
  );
};

export default SVGBox;
