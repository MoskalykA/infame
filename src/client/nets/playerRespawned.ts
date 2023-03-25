import { env } from "client/env";
import { spawnPlayer } from "client/utils/spawnPlayer";
import { addNotification } from "client/utils/addNotification";
import { translate } from "shared/utils/translate";
import { NotificationType } from "shared/types/notificationType";

onNet("infame.nets.playerRespawned", () => {
  spawnPlayer(env.death.hospitalPosition, () => {
    addNotification(
      NotificationType.Success,
      translate("hospitalNotification"),
      5000
    );
  });
});
