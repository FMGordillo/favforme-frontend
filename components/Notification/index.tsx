import { useNotifications } from "@/hooks";
import { Status } from "@/lib/context";
import {
  faCheckCircle,
  faInfo,
  faTimes,
  faTimesCircle,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { Container, Message } from "./styles";

const iconStatus: Record<Status, IconDefinition> = {
  info: faInfo,
  error: faTimesCircle,
  success: faCheckCircle,
};

export const Notification: FunctionComponent = () => {
  const { notification, removeNotification: removeError } = useNotifications();
  return (
    <Container
      className={!!notification ? "show" : "hide"}
      show={!!notification}
      status={notification?.status}
    >
      <Message>
        <FontAwesomeIcon icon={iconStatus[notification?.status || "info"]} />
        <span>{notification?.message}</span>
        <FontAwesomeIcon icon={faTimes} onClick={removeError} />
      </Message>
    </Container>
  );
};
