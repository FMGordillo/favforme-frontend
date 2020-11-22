import Link from "next/link";
import { LayoutComponent as Container } from "../components";
import { Header, IntroTwo } from "../components/Landing";

const IndexPage = () => (
  <Container>
    <Header />
    <IntroTwo />
    <Link href="/acciones">Acciones</Link>
  </Container>
);

export default IndexPage;
