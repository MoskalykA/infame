import { registerAction } from "@/infame/utils/interface";

registerAction("characterList", "onDisableCursor", () => {
  SetNuiFocus(false, false);
});

registerAction("characterList", "onEnableCursor", () => {
  SetNuiFocus(true, true);
});

registerAction("characterList", "select", (id: number) => {
  emitNet("infame.nets.characters.selectCharacter", id);
});
