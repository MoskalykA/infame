import sendNuiEvent from "@/providers/sendNuiEvent";

const enableCursor = (moduleName: string) => {
  sendNuiEvent(moduleName, "onEnableCursor");
};

export default enableCursor;
