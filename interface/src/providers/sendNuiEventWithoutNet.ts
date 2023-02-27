import messageData from "@/types/messageData";

function sendNuiEventWithoutNet(
  moduleName: string,
  functionName: string,
  argsList: Object = {}
) {
  const message: messageData = new Event("message");
  message.data = {
    moduleName,
    functionName,
    argsList,
  };

  window.dispatchEvent(message);
}

export default sendNuiEventWithoutNet;
