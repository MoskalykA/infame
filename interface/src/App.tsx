import { toast, Toaster } from "react-hot-toast";
import { NotificationType } from "@/types/notificationType";
import Visibility from "@/components/visibility";
import IndexCharacter from "@/pages/Character/Index";
import ListCharacter from "@/pages/Character/List";
import CreateCharacter from "@/pages/Character/Create";
import receiveNuiEvent from "@/providers/receiveNuiEvent";

function App() {
  receiveNuiEvent(
    "notification",
    "addNotification",
    (data: { type: NotificationType; text: string; time: number }) => {
      if (data.type === NotificationType.Success) {
        toast.success(data.text, {
          duration: data.time,
          position: "bottom-right",
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      } else if (data.type === NotificationType.Error) {
        toast.error(data.text, {
          duration: data.time,
          position: "bottom-right",
          style: {
            background: "#333",
            color: "#fff",
          },
        });
      }
    }
  );

  return (
    <>
      <Visibility moduleName="characterIndex" cursorWhen>
        <IndexCharacter />
      </Visibility>

      <Visibility moduleName="characterList" cursorWhen>
        <ListCharacter />
      </Visibility>

      <Visibility moduleName="characterCreate" cursorWhen>
        <CreateCharacter />
      </Visibility>

      <Toaster />
    </>
  );
}

export default App;
