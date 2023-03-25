export interface Env {
  richpresence: {
    enabled: boolean;

    appId: string;
    asset?: string;
    assetText?: string;
    assetSmall?: string;
    assetSmallText?: string;

    firstButton?: {
      name: string;
      url: string;
    };

    secondButton?: {
      name: string;
      url: string;
    };

    refreshInterval: number;
  };

  death: {
    timeForRespawn: number;

    hospitalPosition: {
      x: number;
      y: number;
      z: number;
    }
  };
}
