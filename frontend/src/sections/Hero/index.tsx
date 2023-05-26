import React, { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ConnectButton, Trail } from "../../components";
import theme from "../../config/theme";

const Hero: React.FC = () => {
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
      <Trail>
        <Typography
          variant="h3"
          color={theme.palette.text.secondary}
          sx={{ paddingBottom: { xs: 2, md: 4 } }}
        >
          Experience the thrill of gambling without risking a dime.
        </Typography>
        <Typography
          variant="body1"
          color={theme.palette.text.secondary}
          sx={{ paddingBottom: { xs: 2, md: 4 } }}
        >
          FlyFlutter is a game designed to provide entertainment for the ones
          who enjoy the thrill of gambling but without using real money. It
          operates on the Polygon and Mumbai blockchains using the free to mint
          <strong> FlyFlutterCoin </strong>token.
        </Typography>
        <ConnectButton />
      </Trail>
    </Box>
  );
};

export default Hero;
