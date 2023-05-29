import React from "react";
import { createClient, WagmiConfig } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

// const polygonAlchemyId = process.env.REACT_APP_ALCHEMY_POLYGON_ID;
const mumbaiAlchemyId = process.env.REACT_APP_ALCHEMY_MUMBAI_ID;
const chains = [polygonMumbai, polygon];

export const client = createClient(
  getDefaultClient({
    appName: "FlyFlutter",
    alchemyId: mumbaiAlchemyId,
    chains,
  })
);

export default function WagmiWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>{children}</ConnectKitProvider>
    </WagmiConfig>
  );
}
