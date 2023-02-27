import { selectCharacter } from "@/infame/utils/characters/selectCharacter";

onNet("infame.nets.characters.selectCharacter", (data: { id: number }) => {
  selectCharacter(source.toString(), data.id);
});
