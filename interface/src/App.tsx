import { useState } from "react";
import Visibility from "@/components/visibility";
import closeNui from "@/providers/closeNui";
import disableCursor from "@/providers/disableCursor";
import enableCursor from "@/providers/enableCursor";
import sendNuiEvent from "@/providers/sendNuiEvent";
import whenVisibleChange from "@/providers/whenVisibleChange";

function App() {
  const [message, setMessage] = useState<string>("");
  whenVisibleChange("test", (isVisible: boolean) => {
    if (isVisible) {
      enableCursor("test");
    }
  });

  return (
    <Visibility moduleName="test">
      <label>Message</label>
      <input
        onChange={(event: any) => {
          setMessage(event.target.value);
        }}
        type="text"
      />

      <button
        onClick={() => {
          sendNuiEvent("test", "print", {
            message,
          });

          disableCursor("test");
          closeNui("test");
        }}
      >
        Send message
      </button>
    </Visibility>
  );
}

export default App;
