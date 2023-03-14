import { env } from "@/env";
import { showWasted } from "@/infame/utils/showWasted";
import global from "@/infame/types/global";

export const death = () => {
  if (env.death.enabled) {
    showWasted();
  } else {
    global.exports.spawnmanager.spawnPlayer(
      {
        x: 0,
        y: 0,
        z: 0,
        model: "a_m_m_skater_01",
      },
      () => {
        emitNet("infame.nets.playerConnected");
      }
    );
  }
};
