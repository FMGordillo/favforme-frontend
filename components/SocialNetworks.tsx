import { SocialNetwork, SocialNetworkName } from "@/lib/types";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Direction } from "@/utils/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";

interface SocialNetworksProps {
  data?: SocialNetwork[];
  justify?: Direction;
}

export const SocialContainer = styled.div<{
  justify?: Direction;
  itemsLenght?: number;
}>`
  display: grid;
  grid-template-columns: ${({ itemsLenght }) =>
    itemsLenght &&
    itemsLenght > 0 &&
    new Array(itemsLenght).fill("64px").join(" ")};
  justify-items: ${({ justify }) => (justify ? justify : "inherit")};
  grip-gap: 1em;
  & > a > svg {
    width: 32px !important;
    height: 32px !important;
  }
  & > * {
    color: #515151;
    & > * {
      transition: all 300ms;
      :hover {
        cursor: pointer;
      }
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
  const selectIcon = (socialName: SocialNetworkName) => {
    switch (socialName) {
      case "FACEBOOK":
        return <FAIcon className="facebook" icon={faFacebook} />;
      case "TWITTER":
        return <FAIcon className="twitter" icon={faTwitter} />;
      case "LINKEDIN":
        return <FAIcon className="linkedin" icon={faLinkedin} />;
      case "INSTAGRAM":
        return <FAIcon className="instagram" icon={faInstagram} />;
      default:
        return null;
    }
  };

  return (
    <SocialContainer justify={justify} itemsLenght={data?.length}>
      {data?.length &&
        data.length > 0 &&
        // TODO: Fix this
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        data.map(({ link, type }, i) => (
          <a
            key={i}
            href={link || "#"}
            target="_blank"
            rel="noreferrer noopener"
          >
            {selectIcon(type)}
          </a>
        ))}
    </SocialContainer>
  );
};

export { SocialNetworks };
