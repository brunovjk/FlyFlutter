import React from "react";
import { Box } from "@mui/material";
import { SVGBox } from "../../components";

const ChasingAstronaut: React.FC = () => {
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
      <SVGBox svgPath="chasing_astronauts.svg" svgAlt="Chasing Astronaut" />
    </Box>
  );
};

export default ChasingAstronaut;
