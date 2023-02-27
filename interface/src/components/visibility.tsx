import { FC, useState, ReactNode } from "react";
import receiveNuiEvent from "@/providers/receiveNuiEvent";
import enableCursor from "@/providers/enableCursor";
import sendNuiEventWithoutNet from "@/providers/sendNuiEventWithoutNet";

interface VisibilityProps {
  children: any | ReactNode;
  moduleName: string;
  cursorWhen?: boolean;
}

const Visibility: FC<VisibilityProps> = ({
  children,
  moduleName,
  cursorWhen,
}) => {
  const [visible, setVisible] = useState(false);
  receiveNuiEvent(moduleName, "setVisible", (data: { visible: boolean }) => {
    setVisible(data.visible);

    if (cursorWhen) {
      enableCursor(moduleName);
    }

    setTimeout(() => {
      sendNuiEventWithoutNet(moduleName, "isReady", data);
    }, 100);
  });

  if (visible) {
    return children;
  }
};

export default Visibility;

Visibility.defaultProps = {
  cursorWhen: false,
};
