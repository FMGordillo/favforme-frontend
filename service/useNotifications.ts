import { NotificationContext, NotificationsContextValue } from "@/lib/context";
import { useContext } from "react";

export const useNotifications = (): NotificationsContextValue => {
  const contextData = useContext(NotificationContext);
  return contextData;
};
