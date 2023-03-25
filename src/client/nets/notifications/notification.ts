import { NotificationType } from "shared/types/notificationType";
import { addNotification } from "client/utils/addNotification";

onNet(
  "infame.nets.notifications.notification",
  (type: NotificationType, text: string, time: number) => {
    addNotification(type, text, time);
  }
);
