import { LayoutComponent as Container } from "components";
import { Business, CallActions, IntroOne, IntroTwo } from "components/Landing";
import styled from "lib/styled";
import Link from "next/link";
const Divider = styled.div`
  margin-bottom: 6em;
`;

const IndexPage = () => (
  <Container>
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
