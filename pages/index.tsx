import { Layout } from "components";
import { useActions } from "lib/hooks";
import { NextPage } from "next";
import { Divider } from "../components";
import {
  ActionsComponent,
  AlliancesSection,
  CallToActionSection,
  ContactSection,
  IntroOne,
} from "../components/LandingSections";

const IndexPage: NextPage = () => {
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
