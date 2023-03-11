export interface Env {
  identifier: {
    name: string;
  };

  character: {
    enabled: boolean;

    maxCharactersEnabled: boolean;
    maxCharacters: number;

    minHealth: number;
    minArmor: number;

    defaultModel: number;

    save: {
      position: boolean;
      health: boolean;
      armor: boolean;
    };
  };

  weapon: {
    default: number[];
  };

  rank: {
    default: string;
  };

  log: {
    enabled: boolean;
  };

  saveTime: number;
}
