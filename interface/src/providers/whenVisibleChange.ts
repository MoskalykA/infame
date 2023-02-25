import { useEffect } from "react";

const whenVisibleChange = (moduleName: string, eventCallback: Function) => {
  useEffect(() => {
    const eventHandler = (event: MessageEvent) => {
      const data: {
        moduleName: string;
        functionName: string;
        argsList: {
          visible: boolean;
        };
      } = event.data;
      if (
        data.moduleName === moduleName &&
        data.functionName === "whenVisibleChange"
      ) {
        eventCallback(data.argsList.visible);
      }
    };

    window.addEventListener("message", eventHandler);
    return () => window.removeEventListener("message", eventHandler);
  }, []);
};

export default whenVisibleChange;
