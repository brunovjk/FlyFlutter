import { Chain } from "@wagmi/core";

export const polygon = {
  id: 137,
  name: "Polygon",
  network: "polygon",
  nativeCurrency: {
    decimals: 18,
    name: "MATIC",
    symbol: "MATIC",
  },
  rpcUrls: {
    public: { http: ["https://rpc-mainnet.matic.network"] },
    default: { http: ["https://rpc-mainnet.matic.network"] },
  },
  blockExplorers: {
    polygonscan: { name: "Polygonscan", url: "https://polygonscan.com" },
    default: { name: "Polygonscan", url: "https://polygonscan.com" },
  },
} as const satisfies Chain;

export const mumbai = {
  id: 80001,
  name: "Mumbai",
  network: "mumbai",
  nativeCurrency: {
    decimals: 18,
    name: "MATIC",
    symbol: "MATIC",
  },
  rpcUrls: {
    public: { http: ["https://rpc-mumbai.maticvigil.com"] },
    default: { http: ["https://rpc-mumbai.maticvigil.com"] },
  },
  blockExplorers: {
    polygonscan: { name: "Polygonscan", url: "https://mumbai.polygonscan.com" },
    default: { name: "Polygonscan", url: "https://mumbai.polygonscan.com" },
  },
} as const satisfies Chain;
