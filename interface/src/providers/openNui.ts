import sendNuiEventWithoutNet from "@/providers/sendNuiEventWithoutNet";

const openNui = (moduleName: string, args: Object = {}) => {
  sendNuiEventWithoutNet(moduleName, "setVisible", {
    ...args,
    visible: true,
  });
};

export default openNui;
