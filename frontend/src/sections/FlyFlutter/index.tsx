import React, { FC } from "react";
import { FlyFlutterContextProvider } from "./context";

import { Grid } from "@mui/material";

import Tabs from "./Tabs";
import Results from "./Results";
import Header from "./Header";

const FlyFlutter: FC = () => {
  return (
    <FlyFlutterContextProvider>
      <Grid container padding={{ xs: 1, md: 4 }} spacing={{ xs: 4, md: 8 }}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} md={6}>
          <Tabs />
        </Grid>
        <Grid item xs={12} md={6}>
          <Results />
        </Grid>
      </Grid>
    </FlyFlutterContextProvider>
  );
};

export default FlyFlutter;
