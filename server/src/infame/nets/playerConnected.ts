import { env } from "@/env";
import { open } from "@/infame/utils/characters/open";
import { info } from "@/infame/utils/logger";

onNet("infame.nets.playerConnected", () => {
  const src = source;
  if (env.log.enabled) {
    info(`${GetPlayerName(src.toString())} has just joined`);
  }

  open(src);
});
