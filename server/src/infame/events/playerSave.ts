import { env } from "@/env";
import { saveCharacter } from "@/infame/utils/characters/saveCharacter";
import { info } from "@/infame/utils/logger";

if (env.character.enabled) {
  setInterval(() => {
    getPlayers().map((source: string) => {
      const player = Player(source);
      if (player.state.infameId && player.state.characterId) {
        saveCharacter(Number(source), player.state.characterId);
      }

      if (env.log.enabled) {
        info("All the characters were saved");
      }
    });
  }, env.saveTime);
}
