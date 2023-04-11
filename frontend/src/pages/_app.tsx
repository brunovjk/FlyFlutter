import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ConnectKitProvider, getDefaultClient } from "connectkit";

import { WagmiConfig, createClient } from "wagmi";

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_APIKEY_MUMBAI;

const client = createClient(
  getDefaultClient({
    appName: "FlyFlutter",
    alchemyId,
  })
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider
        options={{
          hideBalance: true,
        }}
      >
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
