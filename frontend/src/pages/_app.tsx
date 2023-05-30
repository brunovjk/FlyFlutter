import React from "react";

import { AppProps } from "next/app";
import Head from "next/head";
import { Box } from "@mui/material";

import MuiWrapper from "../config/mui";
import WagmiWrapper from "../config/wagmi";

import "../config/i18n";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/img/favicon.ico" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />

      <title>brunovjk - Web Developer</title>
      <meta name="description" content="Bruno Rocha portfolio website" />
    </Head>
    <WagmiWrapper>
      <MuiWrapper>
        <Box
          component="div"
          style={{
            minHeight: "100vh",
            overflowX: "hidden",
            backgroundImage:
              "linear-gradient(to bottom right, #04040c, #080817)",
          }}
        >
          <Component {...pageProps} />
        </Box>
      </MuiWrapper>
    </WagmiWrapper>
  </>
);

export default App;
