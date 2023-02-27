import { registerAction } from "@/infame/utils/interface";

registerAction("characterIndex", "onDisableCursor", () => {
  SetNuiFocus(false, false);
});

registerAction("characterIndex", "onEnableCursor", () => {
  SetNuiFocus(true, true);
});
