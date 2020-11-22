import Link from "next/link";
import { LayoutComponent as Container } from "../components";
import { Business, CallActions, Header, IntroTwo } from "../components/Landing";

const IndexPage = () => (
  <Container>
    <Header />
    <IntroTwo />
    <CallActions />
    <Business />
    <Link href="/acciones">Acciones</Link>
  </Container>
);

export default IndexPage;
