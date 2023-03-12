import { env } from "@/env";
import { saveCharacter } from "@/infame/utils/characters/saveCharacter";
import { info } from "@/infame/utils/logger";

on("playerDropped", () => {
  const src = source;
  if (env.log.enabled) {
    info(`${GetPlayerName(src.toString())} has just disconnected`);
  }

  const player = Player(src);
  if (player.state.characterId) {
    saveCharacter(src, player.state.characterId);
  }
});
