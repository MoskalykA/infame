import { saveCharacter } from "../utils/characters/saveCharacter";

on("playerDropped", () => {
  const src = source;
  const player = Player(src);
  if (player.state.characterId) {
    saveCharacter(src, player.state.characterId);
  }
});
