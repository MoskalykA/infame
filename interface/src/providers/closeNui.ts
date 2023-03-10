import sendNuiEventWithoutNet from "@/providers/sendNuiEventWithoutNet";

const closeNui = (moduleName: string) => {
  sendNuiEventWithoutNet(moduleName, "setVisible", {
    visible: false,
  });
};

export default closeNui;
