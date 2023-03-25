import { env } from "client/env";
import { spawnPlayer } from "client/utils/spawnPlayer";
import { addNotification } from "client/utils/addNotification";

onNet("infame.nets.playerRespawned", () => {
  spawnPlayer(env.death.hospitalPosition, () => {
    //addNotification(translate("hospitalNotification"));
  });
});
