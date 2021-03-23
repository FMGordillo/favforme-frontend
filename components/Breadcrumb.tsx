import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Children, FunctionComponent } from "react";
import styled from "styled-components";

const Container = styled.nav``;
const ItemContainer = styled.ol`
  color: ${({ theme }) => theme.palette.gray.main};
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  align-items: center;
`;
const Item = styled.li`
  a {
    color: inherit;
    text-decoration: none;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  width: 0.5em;
  margin: 0 0.25em;
`;

/**
 * TODO: Support URL's
 * REVIEW: How do we use it?
 * @deprecated Not in use right now
 */
const Breadcrumb: FunctionComponent = ({ children }) => {
  const childrenMap = Children.map(children, (child) => child);
  return (
    <Container>
      <ItemContainer>
        {childrenMap?.length &&
          childrenMap.map((val, k, valueList) => {
            if (valueList[k + 1]) {
              return (
                <>
                  <Item key={k}>{val}</Item>
                  <Icon icon={faChevronRight} />
                </>
              );
            } else {
              return <Item key={k}>{val}</Item>;
            }
          })}
      </ItemContainer>
    </Container>
  );
};

export { Breadcrumb };
