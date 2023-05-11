import type { AppProps } from "next/app";

import { WagmiConfig } from "wagmi";
import { client } from "@/config/wagmi";
import { ConnectKitProvider } from "connectkit";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../config/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="minimal">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
