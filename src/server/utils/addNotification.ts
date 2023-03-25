import { NotificationType } from "shared/types/notificationType";

const addNotification = (
  source: number,
  type: NotificationType,
  text: string,
  time: number
) => {
  emitNet("infame.nets.notifications.notification", source, type, text, time);
};

export { addNotification };
