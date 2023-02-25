import { registerAction, sendAction } from "@/infame/utils/interface";

RegisterCommand(
  "test",
  () => {
    console.log("aa");

    sendAction("test", "setVisible", {
      visible: true,
    });
  },
  false
);

registerAction("test", "print", (data: any) => {
  console.log(data.message);
});

registerAction("test", "onDisableCursor", () => {
  SetNuiFocus(false, false);
});

registerAction("test", "onEnableCursor", () => {
  SetNuiFocus(true, true);
});
