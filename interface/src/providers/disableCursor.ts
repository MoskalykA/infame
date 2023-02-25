import sendNuiEvent from "@/providers/sendNuiEvent";

const disableCursor = (moduleName: string) => {
  sendNuiEvent(moduleName, "onDisableCursor", {});
};

export default disableCursor;
