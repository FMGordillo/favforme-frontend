import Link from "next/link";
import { LayoutComponent as Container } from "../components";
import { Header } from "../components/Landing";

const IndexPage = () => (
  <Container>
    <Header />
    <Link href="/acciones">Acciones</Link>
  </Container>
);

export default IndexPage;
