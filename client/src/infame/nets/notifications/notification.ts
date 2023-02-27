import { NotificationType } from "@/infame/types/notificationType";
import { sendAction } from "@/infame/utils/interface";

onNet(
  "infame.nets.notifications.notification",
  (type: NotificationType, text: string, time: number) => {
    sendAction("notification", "addNotification", {
      type,
      text,
      time,
    });
  }
);
