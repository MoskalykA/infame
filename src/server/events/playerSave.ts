import { env } from "server/env";
import { saveCharacter } from "server/utils/characters/saveCharacter";
import { info } from "server/utils/logger";
import { translate } from "shared/utils/translate";

if (env.character.enabled) {
  setInterval(() => {
    getPlayers().map((source: string) => {
      const player = Player(source);
      if (player.state.infameId && player.state.characterId) {
        saveCharacter(Number(source), player.state.characterId);
      }

      if (env.log.enabled) {
        info(translate("charactersSaved"));
      }
    });
  }, env.saveTime);
}
