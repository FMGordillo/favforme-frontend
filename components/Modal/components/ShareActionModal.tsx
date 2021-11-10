import { DialogContainer, DialogTitle } from "../styles";
import {
  faFacebook,
  faLinkedin,
  faPinterest,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import styled from "styled-components";

const ModalContent = styled.div`
  text-align: center;
`;

const SocialNetworks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    font-size: 28px;
    color: inherit;
    text-decoration: none;
    transition: color 300ms;
  }

  a:hover {
    color: gray;
  }
`;

type ShareActionModalProps = {
  url: string;
  text: string;
};

export const ShareActionModal: FunctionComponent<ShareActionModalProps> = ({
  url = "https://favforme.com",
  text,
}) => {
  const whatsappText = `${text} (${url})`;

  return (
    <DialogContainer>
      <DialogTitle>Compartir acción</DialogTitle>
      <ModalContent>
        <SocialNetworks>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
            target="_blank"
            rel="nofollow noopener"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href={`https://pinterest.com/pin/create/button/?url=${url}&media=&description=${text}`}
            target="_blank"
            rel="nofollow noopener"
          >
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${url}&text=${text}`}
            target="_blank"
            rel="nofollow noopener"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href={`whatsapp://send?text=${whatsappText}`}
            target="_blank"
            rel="nofollow noopener"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </SocialNetworks>
      </ModalContent>
    </DialogContainer>
  );
};
