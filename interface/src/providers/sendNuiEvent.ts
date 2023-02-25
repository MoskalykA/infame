import GetParentResourceName from "@/types/getParentResourceName";

const sendNuiEvent = (
  moduleName: string,
  functionName: string,
  argsList: Object
) => {
  fetch(`https://${GetParentResourceName()}/${moduleName}::${functionName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(argsList),
  }).catch(console.error);
};

export default sendNuiEvent;
