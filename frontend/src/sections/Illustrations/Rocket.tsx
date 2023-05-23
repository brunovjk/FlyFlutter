import React from "react";
import { Box } from "@mui/material";
import { SVGBox } from "../../components";

const Rocket: React.FC = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: { xs: "100%", md: "50%" },
        height: "100%",
      }}
    >
      <SVGBox svgPath="rocket.svg" svgAlt="Rocket" />
    </Box>
  );
};

export default Rocket;
