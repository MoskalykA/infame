import { env } from "server/env";
import { emit as emitNet } from "server/utils/emitNet";

export const onDeath = (source: number): void => {
  setTimeout(() => {
    emitNet("infame.nets.playerRespawned", source);
  }, env.death.timeForRespawn);
};
