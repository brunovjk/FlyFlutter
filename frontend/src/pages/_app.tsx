import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { WagmiConfig, createClient } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_APIKEY_MUMBAI;

const chains = [polygonMumbai, polygon];

const client = createClient(
  getDefaultClient({
    appName: "FlyFlutter",
    alchemyId,
    chains,
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
