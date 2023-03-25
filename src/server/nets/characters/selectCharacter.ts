import { NotificationType } from "shared/types/notificationType";
import { addNotification } from "server/utils/addNotification";
import { selectCharacter } from "server/utils/characters/selectCharacter";
import { translate } from "shared/utils/translate";

onNet("infame.nets.characters.selectCharacter", (id: string) => {
  const src = source;
  const player = Player(src);
  if (player.state.characterId) {
    addNotification(
      src,
      NotificationType.Error,
      translate("youAlreadyHaveCharacter"),
      5000
    );

    return;
  }

  selectCharacter(src, id);
});
