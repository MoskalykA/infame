import { Env } from "server/types/env";
import { Language } from "shared/types/language";

export const env: Env = {
  language: {
    type: Language.French,
  },

  identifier: {
    name: "discord",
  },

  character: {
    enabled: true,

    maxCharactersEnabled: false,
    maxCharacters: 3,

    save: {
      position: true,
      health: true,
      armor: true,
    },
  },

  health: {
    default: 200,
  },

  armor: {
    default: 0,
  },

  model: {
    default: 0x94562dd7,
  },

  weapons: {
    default: [0x5ef9fec4, 0x624fe830],
  },

  rank: {
    default: "user",
  },

  log: {
    enabled: true,
    saveInDatabase: true,
  },

  ban: {
    enabled: true,
  },

  death: {
    timeForRespawn: 10_000,
  },

  saveTime: 60_000,
};
