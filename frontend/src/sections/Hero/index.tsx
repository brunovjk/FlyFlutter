import React, { FC } from "react";
import { Stack, Typography } from "@mui/material";
import { ConnectButton, FadeInLayout } from "../../components";

const Hero: FC = () => {
  return (
    <FadeInLayout>
      <Stack spacing={3}>
        <Typography variant="h1">
          Experience the thrill of gambling without risking a dime.
        </Typography>
        <Typography variant="body1">
          FlyFlutter is a game designed to provide entertainment for the ones
          who enjoy the thrill of gambling but without using real money. It
          operates on the Polygon and Mumbai blockchains using the free to mint
          <strong> FlyFlutterCoin </strong>token.
        </Typography>
        <ConnectButton />
      </Stack>
    </FadeInLayout>
  );
};

export default Hero;
