import GetParentResourceName from "@/types/getParentResourceName";
import disableCursor from "@/providers/disableCursor";
import closeNui from "@/providers/closeNui";

function sendNuiEvent(
  moduleName: string,
  functionName: string,
  argsList: Object = {},
  whenCloseNui: boolean = false,
  whenDisableCursor: boolean = false
) {
  fetch(`https://${GetParentResourceName()}/${moduleName}::${functionName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(argsList),
  }).catch(console.error);

  if (whenCloseNui) {
    closeNui(moduleName);
  }

  if (whenDisableCursor) {
    disableCursor(moduleName);
  }
}

export default sendNuiEvent;
