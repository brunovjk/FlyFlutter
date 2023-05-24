import React, { FC, CSSProperties } from "react";
import { Box } from "@mui/material";
import { SVGBox, TransactionBox } from "../../components";

const Rocket: FC<{ isConnected: boolean }> = ({ isConnected }) => {
  const initialStyle: CSSProperties = {
    width: "300%",
    height: "200%",
  };
  const falseStyle: CSSProperties = {
    width: "50%",
    height: "50%",
  };
  const trueStyle: CSSProperties = {
    width: "25%",
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
        <SVGBox svgPath="rocket.svg" svgAlt="Rocket" />
      </TransactionBox>
    </Box>
  );
};

export default Rocket;
