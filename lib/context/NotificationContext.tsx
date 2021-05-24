import { Notification as NotificationComponent } from "@/components/Notification";
import {
  createContext,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";

export type Status = "success" | "error" | "info";
type Notification = { message: string; status: Status } | null;
type AddMessage = (message: string, status: Status, timeout?: number) => void;

export interface NotificationsContextValue {
  notification: Notification;
  createNotification: AddMessage;
  removeNotification: () => void;
}

export const NotificationContext = createContext<NotificationsContextValue>(
  {} as NotificationsContextValue
);

export const NotificationProvider: FunctionComponent = ({ children }) => {
  const [timeoutFade, setTimeoutFade] = useState(3000);
  const [notification, setNotification] = useState<Notification>(null);

  const removeMessage = () => setNotification(null);

  const addMessage = (message: string, status: Status, timeout = 3000) => {
    setTimeoutFade(timeout);
    setNotification({ message, status });
  };

  useEffect(() => {
    if (!notification) return;

    const timer = setTimeout(() => {
      setNotification(null);
    }, timeoutFade);

    return () => {
      clearTimeout(timer);
    };
  }, [notification, timeoutFade]);

  const contextValue = {
    notification,
    createNotification: useCallback(
      (message, status, timeout) => addMessage(message, status, timeout),
      []
    ),
    removeNotification: useCallback(() => removeMessage(), []),
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      <NotificationComponent />
      {children}
    </NotificationContext.Provider>
  );
};
