import { registerAction } from "client/utils/interface";

registerAction("characterList", "onDisableCursor", () => {
  SetNuiFocus(false, false);
});

registerAction("characterList", "onEnableCursor", () => {
  SetNuiFocus(true, true);
});

registerAction("characterList", "select", (data: { id: string }) => {
  emitNet("infame.nets.characters.selectCharacter", data.id);
});
