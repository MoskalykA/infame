import { selectCharacter } from "@/infame/utils/characters/selectCharacter";

onNet("infame.nets.characters.selectCharacter", (characterId: number) => {
  selectCharacter(source.toString(), characterId);
});
