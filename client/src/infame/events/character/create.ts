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
    console.log(characterData.firstName, characterData.lastName);
  }
);
