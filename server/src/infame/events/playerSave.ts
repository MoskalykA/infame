import { env } from "@/env";
import { saveCharacter } from "@/infame/utils/characters/saveCharacter";

if (env.character.enabled) {
  setInterval(() => {
    getPlayers().map((source: string) => {
      const player = Player(source);
      if (player.state.infameId && player.state.characterId) {
        saveCharacter(player.state.infameId, player.state.characterId);
      }
    });
  }, env.saveTime);
}
