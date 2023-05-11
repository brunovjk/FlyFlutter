import React, { FC } from "react";
import { useConnectionSync } from "@/hooks";

import { Grid } from "@mui/material";

interface HeroAnimationProps {
  HeroHeader: FC;
  HeroDisplay: FC;
  HeroTab: FC;
}

const HeroAnimation: FC<HeroAnimationProps> = ({
  HeroHeader,
  HeroDisplay,
  HeroTab,
}) => {
  const isConnected = useConnectionSync();

  return (
    <Grid
      container
      maxWidth="lg"
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      padding={{ xs: 1, md: 4 }}
      spacing={{ xs: 2, md: 8 }}
    >
      <Grid item xs={isConnected ? 12 : 6} order={isConnected ? 0 : 1}>
        <HeroHeader />
      </Grid>
      <Grid item xs={6} order={isConnected ? 1 : 0}>
        <HeroDisplay />
      </Grid>
      {isConnected && (
        <Grid item xs={6}>
          <HeroTab />
        </Grid>
      )}
    </Grid>
  );
};

export default HeroAnimation;
