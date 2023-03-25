import { registerAction } from "client/utils/interface";

registerAction("characterIndex", "onDisableCursor", () => {
  SetNuiFocus(false, false);
});

registerAction("characterIndex", "onEnableCursor", () => {
  SetNuiFocus(true, true);
});
