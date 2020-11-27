import { LayoutComponent as Container } from "components";
import {
  Brands,
  Business,
  CallActions,
  Footer,
  Header,
  IntroOne,
  IntroTwo,
  NavBar,
} from "components/Landing";
import { FunctionComponent } from "react";
import styled from "styled-components";

const Divider = styled.div`
  margin-bottom: 6em;
`;

const IndexPage: FunctionComponent = () => (
  <Container>
    <NavBar />
    <Header />
    <Divider />
    <IntroOne />
    <Divider />
    <IntroTwo />
    <Divider />
    <CallActions />
    <Divider />
    <Business />
    <Divider />
    <Brands />
    <Divider />
    <Footer />
  </Container>
);

export default IndexPage;
