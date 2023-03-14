import { Language } from "@/infame/types/language";

export interface Env {
  language: {
    type: Language;
  };

  identifier: {
    name: string;
  };

  character: {
    enabled: boolean;

    maxCharactersEnabled: boolean;
    maxCharacters: number;

    save: {
      position: boolean;
      health: boolean;
      armor: boolean;
    };
  };

  health: {
    default: number;
  };

  armor: {
    default: number;
  };

  model: {
    default: number;
  };

  weapons: {
    default: number[];
  };

  rank: {
    default: string;
  };

  log: {
    enabled: boolean;
    saveInDatabase: boolean;
  };

  ban: {
    enabled: boolean;
  };

  saveTime: number;
}
