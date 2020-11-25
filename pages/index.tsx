import { LayoutComponent as Container } from "components";
import {
  Business,
  CallActions,
  Header,
  IntroOne,
  IntroTwo,
  NavBar,
} from "components/Landing";
import Link from "next/link";
import styled from "styled-components";
const Divider = styled.div`
  margin-bottom: 6em;
`;

const IndexPage = () => (
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
    <Link href="/acciones">Acciones</Link>
  </Container>
);

export default IndexPage;
