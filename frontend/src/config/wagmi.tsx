import React from "react";
import { createClient, WagmiConfig } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { useTranslation } from "react-i18next";
import { Languages } from "connectkit/build/types";

// const polygonAlchemyId = process.env.NEXT_PUBLIC_ALCHEMY_POLYGON_ID;
const mumbaiAlchemyId = process.env.NEXT_PUBLIC_ALCHEMY_MUMBAI_ID;

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
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider
        options={{ language: (currentLanguage as Languages) ?? "en-US" }}
      >
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
