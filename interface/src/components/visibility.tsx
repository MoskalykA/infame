import { FC, useState, ReactNode } from "react";
import receiveNuiEvent from "@/providers/receiveNuiEvent";
import messageData from "@/types/messageData";

const Visibility: FC<{
  moduleName: string;
  children: any | ReactNode;
}> = ({ moduleName, children }) => {
  const [visible, setVisible] = useState(false);
  receiveNuiEvent(moduleName, "setVisible", (data: { visible: boolean }) => {
    setVisible(data.visible);

    const message: messageData = new Event("message");
    message.data = {
      moduleName: moduleName,
      functionName: "whenVisibleChange",
      argsList: {
        visible: data.visible,
      },
    };

    window.dispatchEvent(message);
  });

  return (
    <div id={moduleName} style={{ position: "fixed" }}>
      {visible && <>{children}</>}
    </div>
  );
};

export default Visibility;
