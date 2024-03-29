import { env } from "server/env";
import { addNotification } from "server/utils/addNotification";
import { translate } from "shared/utils/translate";
import { NotificationType } from "shared/types/notificationType";

on("onResourceStop", (resourceName: string) => {
  if (GetCurrentResourceName() != resourceName) {
    return;
  }

  GlobalState.infameAfterTheStop = true;
});

on("onResourceStart", (resourceName: string) => {
  if (GetCurrentResourceName() != resourceName) {
    return;
  }

  setTimeout(() => {
    if (GlobalState.infameAfterTheStop) {
      getPlayers().map((source: string) => {
        const player = Player(source);
        player.state.infameId = undefined;

        addNotification(
          Number(source),
          NotificationType.Success,
          translate("infameGameModeReloaded"),
          5000
        );

        if (env.character.enabled) {
          player.state.characterId = undefined;

          addNotification(
            Number(source),
            NotificationType.Success,
            translate("reselectCharacter"),
            5000
          );
        }
      });
    }
  }, 1000);
});
