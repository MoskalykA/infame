import { env } from "@/env";

onNet("baseevents:onPlayerWasted", () => {
  const src = source;
  const player = Player(src);
  if (env.character.enabled && player.state.characterId) {
    player.state.characterId = undefined;
  }
});
