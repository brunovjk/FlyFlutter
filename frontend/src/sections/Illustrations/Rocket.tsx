import React from "react";
import { Box } from "@mui/material";
import { SVGBox, TransactionBox } from "../../components";

const Rocket: React.FC<{ isConnected: boolean }> = ({ isConnected }) => {
  const initialStyle: React.CSSProperties = {
    width: "300%",
    height: "200%",
  };
  const defaultStyle: React.CSSProperties = {
    width: "50%",
    height: "50%",
  };
  const connectedStyle: React.CSSProperties = {
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
        isConnected={isConnected}
        initialStyle={initialStyle}
        defaultStyle={defaultStyle}
        connectedStyle={connectedStyle}
      >
        <SVGBox svgPath="rocket.svg" svgAlt="Rocket" />
      </TransactionBox>
    </Box>
  );
};

export default Rocket;
