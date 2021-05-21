import { createContext, FunctionComponent, useCallback, useState } from "react";

type Status = "success" | "error" | "info";
type Notification = { message: string; status: Status } | null;
type AddError = (message: string, status: Status) => void;

export interface NotificationsContextValue {
  notification: Notification;
  addError: AddError;
  removeError: () => void;
}

export const NotificationContext = createContext<NotificationsContextValue>(
  {} as NotificationsContextValue
);

export const NotificationProvider: FunctionComponent = ({ children }) => {
  const [notification, setNotification] = useState<Notification>(null);

  const removeError = () => setNotification(null);

  const addError = (message: string, status: Status) =>
    setNotification({ message, status });

  const contextValue = {
    notification,
    addError: useCallback((message, status) => addError(message, status), []),
    removeError: useCallback(() => removeError(), []),
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};
