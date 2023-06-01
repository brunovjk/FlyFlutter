import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@/config/createEmotionCache";

import Box from "@mui/material/Box";
import MuiWrapper from "@/config/mui";
import WagmiWrapper from "@/config/wagmi";
import "@/config/i18n";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <title>Bruno Rocha - Web Developer</title>
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
    </CacheProvider>
  );
}
