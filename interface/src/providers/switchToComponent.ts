import closeNui from "@/providers/closeNui";
import disableCursor from "@/providers/disableCursor";
import enableCursor from "@/providers/enableCursor";
import openNui from "@/providers/openNui";

function switchToComponent(
  currentComponent: string,
  newComponent: string,
  args: Object = {},
  options: {
    disableCursor: boolean;
    enableCursor: boolean;
  } = {
    disableCursor: false,
    enableCursor: false,
  }
) {
  if (options.disableCursor) {
    disableCursor(currentComponent);
  }

  closeNui(currentComponent);
  openNui(newComponent, args);

  if (options.enableCursor) {
    enableCursor(newComponent);
  }
}

export default switchToComponent;
