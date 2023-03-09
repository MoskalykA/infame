import { env } from "@/env";
import { open } from "@/infame/utils/characters/open";
import { logger } from "@/infame/utils/logger";

onNet("infame.nets.playerConnected", () => {
  const src = source;
  if (env.log.enabled) {
    logger.info(`${GetPlayerName(src.toString())} has just joined`);
  }

  open(src);
});
