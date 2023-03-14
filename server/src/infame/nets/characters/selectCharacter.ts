import { NotificationType } from "@/infame/types/notificationType";
import { addNotification } from "@/infame/utils/addNotification";
import { selectCharacter } from "@/infame/utils/characters/selectCharacter";
import { translate } from "@/infame/utils/translate";

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
