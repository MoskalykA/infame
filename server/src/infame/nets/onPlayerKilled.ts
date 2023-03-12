import { env } from "@/env";

onNet("baseevents:onPlayerKilled", () => {
  const src = source;
  const player = Player(src);
  if (env.character.enabled && player.state.characterId) {
    player.state.characterId = undefined;
  }
});
