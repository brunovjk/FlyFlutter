import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { ConnectButton, TrailFromX } from "../../components";
import theme from "../../config/theme";

const Hero: FC<{ isConnected: boolean }> = ({ isConnected }) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        width: { xs: "100%", md: "50%" },
        height: "100%",
      }}
    >
      <TrailFromX isConnected={isConnected}>
        <Typography variant="h3" color={theme.palette.text.secondary}>
          Experience the thrill of gambling without risking a dime.
        </Typography>
        <Typography variant="body1" color={theme.palette.text.secondary}>
          FlyFlutter is a game designed to provide entertainment for the ones
          who enjoy the thrill of gambling but without using real money. It
          operates on the Polygon and Mumbai blockchains using the free to mint
          <strong> FlyFlutterCoin </strong>token.
        </Typography>
        <ConnectButton />
      </TrailFromX>
    </Box>
  );
};

export default Hero;
