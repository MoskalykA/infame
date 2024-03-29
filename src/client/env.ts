import { Env } from "client/types/env";

export const env: Env = {
  richpresence: {
    enabled: true,

    appId: "1005150058884382721",
    asset: "r",
    assetText: "This is a lage icon with text",
    assetSmall: "r",
    assetSmallText: "This is a lsmall icon with text",

    firstButton: {
      name: "Connect me",
      url: "fivem://connect/localhost:30120",
    },

    secondButton: {
      name: "Source code",
      url: "https://github.com/MoskalykA/infame",
    },

    refreshInterval: 60_000,
  },

  death: {
    timeForRespawn: 10_000,

    hospitalPosition: {
      x: 100,
      y: 100,
      z: 50,
    },
  },
};
