import { env } from "@/env";
import { saveCharacter } from "@/infame/utils/characters/saveCharacter";
import { info } from "@/infame/utils/logger";
import { translate } from "@/infame/utils/translate";

on("playerDropped", () => {
  const src = source;
  if (env.log.enabled) {
    info(
      translate("playerDisconnected", {
        search: "$$$",
        replace: GetPlayerName(src.toString()),
      })
    );
  }

  const player = Player(src);
  if (player.state.characterId) {
    saveCharacter(src, player.state.characterId);
  }
});
