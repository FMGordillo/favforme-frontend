import { FunctionComponent, useContext, useState } from "react";
import { MobileNavigator, Nav, Ul, User } from "./styles";
import { ContactModal } from "@/components/Modal/components";
import Image from "next/image";
import { Logo } from "../assets";
import { ModalContext } from "@/lib/context";
import { NavItem } from "./NavItem";
import { event } from "@/lib/gtag";
import { useRouter } from "next/router";

interface NavBarProps {
  isScrolled?: boolean;
}

const NavBar: FunctionComponent<NavBarProps> = () => {
  const router = useRouter();
  // const { data: session } = useSession();
  const [user, setUser] = useState("");
  const { handleModal } = useContext(ModalContext);
  const [open, setOpen] = useState(false);

  const handleUserClick = async () => {
    // if (session) router.push("/perfil");
    // else signIn();
    // TODO: Make a Provider / hook for it
    const [account] = (await window.ethereum.request({
      method: "eth_requestAccounts",
    })) as string[];
    setUser(`${account.slice(0, 6)}...`);
  };

  const handleMobileOpen = () => {
    setOpen(!open);
  };

  const handleContactClick = () => {
    event({
      action: "click_contacto_navbar",
      category: "contacto",
      value: 1,
    });
    handleModal(ContactModal);
  };

  return (
    <Nav>
      <MobileNavigator open={open}>
        <Image
          onClick={handleMobileOpen}
          layout="fixed"
          width={60}
          height={60}
          src="/images/hamburger.png"
        />
      </MobileNavigator>
      <Ul open={open}>
        <NavItem href="/nosotros">FavForMe</NavItem>
        <NavItem href="/acciones">Acciones</NavItem>
        <NavItem image href="/">
          <Logo />
        </NavItem>
        <NavItem href="/#brands">Empresas</NavItem>
        <NavItem onClick={handleContactClick}>Contacto</NavItem>
        <NavItem isProfileButton onClick={() => router.push("/perfil")} />
        <User onClick={handleUserClick}>
          <div>
            <Image src={"/images/icon_user.svg"} width={75} height={75} />
          </div>
          <p>{user ? user : "Iniciar sesión"}</p>
        </User>
      </Ul>
    </Nav>
  );
};

export { NavBar };
