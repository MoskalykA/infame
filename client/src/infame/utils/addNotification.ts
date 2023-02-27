import { NotificationType } from "@/infame/types/notificationType";
import { sendAction } from "@/infame/utils/interface";

const addNotification = (
  type: NotificationType,
  text: string,
  time: number
) => {
  sendAction("notification", "addNotification", {
    type,
    text,
    time,
  });
};

export { addNotification };
