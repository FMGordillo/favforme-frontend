import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialNetwork } from "lib/data";
import { Direction } from "lib/styled";
import { FunctionComponent } from "react";
import styled from "styled-components";

interface SocialNetworksProps {
  data?: Partial<Record<SocialNetwork, string>>;
  justify?: Direction;
}

export const Container = styled.div<{ justify?: Direction }>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: ${({ justify }) => (justify ? justify : "inherit")};
  grip-gap: 1em;
  & > a > svg {
    width: 32px !important;
    height: 32px !important;
  }
  & > * {
    color: ${({ theme }) => theme.color.gray.main};
    transition: all 300ms;

    :hover {
      cursor: pointer;
    }
    :nth-child(1) {
      :hover {
        color: #0a66c2;
      }
    }
    :nth-child(2) {
      :hover {
        color: #d92d83;
      }
    }
    :nth-child(3) {
      :hover {
        color: #1877f2;
      }
    }
    :nth-child(4) {
      :hover {
        color: #1da1f2;
      }
    }
  }
`;

const SocialNetworks: FunctionComponent<SocialNetworksProps> = ({
  data,
  justify,
}) => {
  const selectIcon = (socialName: SocialNetwork) => {
    switch (socialName) {
      case "facebook":
        return faFacebook;
      case "twitter":
        return faTwitter;
      case "linkedin":
        return faLinkedin;
      case "instagram":
        return faInstagram;
      default:
        return null;
    }
  };

  return (
    <Container justify={justify}>
      {data &&
        Object.entries(data).map(([name, link]: [SocialNetwork, string], k) => (
          <a key={k} href={link || "#"}>
            <FontAwesomeIcon icon={selectIcon(name)} />
          </a>
        ))}
    </Container>
  );
};

export { SocialNetworks };
