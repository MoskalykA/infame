import { NotificationType } from "shared/types/notificationType";
import { sendAction } from "client/utils/interface";

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
