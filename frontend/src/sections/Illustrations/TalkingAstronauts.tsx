import React from "react";
import { Box } from "@mui/material";
import { SVGBox, TransactionBox } from "../../components";

const TalkingAstronauts: React.FC<{ isConnected: boolean }> = ({
  isConnected,
}) => {
  const initialStyle: React.CSSProperties = {
    width: "50%",
    height: "50%",
  };
  const falseStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
  };
  const trueStyle: React.CSSProperties = {
    width: "5%",
    height: "50%",
  };
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        width: { xs: "100%", md: "50%" },
        height: "100%",
      }}
    >
      <TransactionBox
        controlStyle={isConnected}
        initialStyle={initialStyle}
        falseStyle={falseStyle}
        trueStyle={trueStyle}
      >
        <SVGBox svgPath="talking_astronauts.svg" svgAlt="Talking Astronauts" />
      </TransactionBox>
    </Box>
  );
};

export default TalkingAstronauts;
