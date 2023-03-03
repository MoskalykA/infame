import { registerAction } from "@/infame/utils/interface";

registerAction("characterCreate", "onDisableCursor", () => {
  SetNuiFocus(false, false);
});

registerAction("characterCreate", "onEnableCursor", () => {
  SetNuiFocus(true, true);
});

registerAction(
  "characterCreate",
  "create",
  (characterData: { firstName: string; lastName: string }) => {
    emitNet("infame.nets.characters.createCharacter", {
      firstName: characterData.firstName,
      lastName: characterData.lastName,
    });
  }
);
