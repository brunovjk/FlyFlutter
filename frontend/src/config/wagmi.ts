import { createClient } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { getDefaultClient } from "connectkit";

// const polygonAlchemyId = process.env.NEXT_PUBLIC_ALCHEMY_APIKEY_POLYGON;
const mumbaiAlchemyId = process.env.NEXT_PUBLIC_ALCHEMY_APIKEY_MUMBAI;
const chains = [polygonMumbai, polygon];

export const client = createClient(
  getDefaultClient({
    appName: "FlyFlutter",
    alchemyId: mumbaiAlchemyId,
    chains,
  })
);
