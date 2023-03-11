import { Env } from "@/infame/types/env";

export const env: Env = {
  identifier: {
    name: "discord",
  },

  character: {
    enabled: true,

    maxCharactersEnabled: false,
    maxCharacters: 3,

    minHealth: 200,
    minArmor: 0,

    defaultModel: 0x94562dd7,

    save: {
      position: true,
      health: true,
      armor: true,
    },
  },

  weapon: {
    default: [0x5ef9fec4, 0x624fe830],
  },

  rank: {
    default: "user",
  },

  log: {
    enabled: true,
  },

  saveTime: 60_000, // 60 seconds
};
