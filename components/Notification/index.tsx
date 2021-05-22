import { useNotifications } from "@/hooks";
import { FunctionComponent } from "react";
import { Container, Message } from "./styles";

export const Notification: FunctionComponent = () => {
  const { notification } = useNotifications();
  return (
    <Container show={!!notification} status={notification?.status}>
      <Message>{notification?.message}</Message>
    </Container>
  );
};
