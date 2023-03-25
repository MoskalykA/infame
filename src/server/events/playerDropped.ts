import { env } from "server/env";
import { saveCharacter } from "server/utils/characters/saveCharacter";
import { info } from "server/utils/logger";
import { translate } from "shared/utils/translate";

on("playerDropped", () => {
  const src = source;
  if (env.log.enabled) {
    info(translate("playerDisconnected", [GetPlayerName(src.toString())]));
  }

  const player = Player(src);
  if (player.state.characterId) {
    saveCharacter(src, player.state.characterId);
  }
});
