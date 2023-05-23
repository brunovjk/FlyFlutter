import React, { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ConnectButton } from "../../components";
import theme from "../../config/theme";

const Hero: FC = () => {
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
      <Stack spacing={3}>
        <Typography variant="h2" color={theme.palette.text.secondary}>
          Experience the thrill of gambling without risking a dime.
        </Typography>
        <Typography variant="body1" color={theme.palette.text.secondary}>
          FlyFlutter is a game designed to provide entertainment for the ones
          who enjoy the thrill of gambling but without using real money. It
          operates on the Polygon and Mumbai blockchains using the free to mint
          <strong> FlyFlutterCoin </strong>token.
        </Typography>
        <ConnectButton />
      </Stack>
    </Box>
  );
};

export default Hero;
