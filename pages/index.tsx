import { Layout } from "components";
import { ModalContext } from "lib/context";
import { useActions } from "lib/hooks";
import { NextPage } from "next";
import { useContext } from "react";
import { Divider } from "../components";
import {
  ActionsComponent,
  AlliancesSection,
  CallToActionSection,
  ContactSection,
  IntroOne,
} from "../components/LandingSections";

const IndexPage: NextPage = () => {
  const modalData = useContext(ModalContext);
  const { data } = useActions();

  return (
    <Layout
      header
      headerProps={{
        isIndex: true,
        title: "Estás en FavForMe",
        subtitle: "No dejemos a nadie atrás",
      }}
    >
      <Divider />
      <IntroOne />
      <ActionsComponent actions={data?.actions} />
      <Divider />
      <CallToActionSection />
      <Divider />
      <AlliancesSection />
      <Divider />
      <ContactSection />
      <Divider />
    </Layout>
  );
};

export default IndexPage;
