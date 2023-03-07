import { NotificationType } from "@/infame/types/notificationType";
import { addNotification } from "@/infame/utils/addNotification";
import { selectCharacter } from "@/infame/utils/characters/selectCharacter";

onNet("infame.nets.characters.selectCharacter", (id: string) => {
  const src = source;
  const player = Player(src);
  if (player.state.characterId) {
    addNotification(
      src,
      NotificationType.Error,
      "You already have a character",
      5000
    );

    return;
  }

  selectCharacter(src, id);
});
