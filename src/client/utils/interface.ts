const sendAction = (
  moduleName: string,
  functionName: string,
  argsList: any
) => {
  SendNUIMessage({
    moduleName,
    functionName,
    argsList,
  });
};

const registerAction = (
  moduleName: string,
  functionName: string,
  callback: Function
) => {
  RegisterNuiCallback(`${moduleName}::${functionName}`, (data: any) => {
    callback(data);
  });
};

export { sendAction, registerAction };
