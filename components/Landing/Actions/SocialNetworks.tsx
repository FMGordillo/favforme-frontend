import { IconProp } from "@fortawesome/fontawesome-svg-core";
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

export const Container = styled.div<{
  justify?: Direction;
  itemsLenght?: number;
}>`
  display: grid;
  grid-template-columns: ${({ itemsLenght }) =>
    new Array(itemsLenght).fill("64px").join(" ")};
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
    .facebook {
      :hover {
        color: #0a66c2;
      }
    }
    .instagram {
      :hover {
        color: #d92d83;
      }
    }
    .linkedin {
      :hover {
        color: #1877f2;
      }
    }
    .twitter {
      :hover {
        color: #1da1f2;
      }
    }
  }
`;

interface FAIconProps {
  className: string;
  icon: IconProp;
}

const FAIcon: FunctionComponent<FAIconProps> = ({ className, icon }) => (
  <FontAwesomeIcon className={className} icon={icon} />
);

const SocialNetworks: FunctionComponent<SocialNetworksProps> = ({
  data,
  justify,
}) => {
  const arrayData = Object.entries(data);

  const selectIcon = (socialName: SocialNetwork) => {
    switch (socialName) {
      case "facebook":
        return <FAIcon className="facebook" icon={faFacebook} />;
      case "twitter":
        return <FAIcon className="twitter" icon={faTwitter} />;
      case "linkedin":
        return <FAIcon className="linkedin" icon={faLinkedin} />;
      case "instagram":
        return <FAIcon className="instagram" icon={faInstagram} />;
      default:
        return null;
    }
  };

  return (
    <Container justify={justify} itemsLenght={arrayData.length}>
      {data &&
        arrayData.map(([name, link]: [SocialNetwork, string], k) => (
          <a key={k} href={link || "#"} target="_blank" rel="noreferrer">
            {selectIcon(name)}
          </a>
        ))}
    </Container>
  );
};

export { SocialNetworks };
