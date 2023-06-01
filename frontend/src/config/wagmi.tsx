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
  const currentLanguage: string = i18n.language;

  const languageMap: { [key: string]: Languages } = {
    en: "en-US",
    es: "es-ES",
    fr: "fr-FR",
    ja: "ja-JP",
    pt: "pt-BR",
    zh: "zh-CN",
  };
  const defaultLanguage: Languages = "en-US";
  const useLanguage: Languages =
    languageMap[currentLanguage] || defaultLanguage;

  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider options={{ language: useLanguage }}>
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
