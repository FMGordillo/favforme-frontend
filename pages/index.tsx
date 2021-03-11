import { NextPage } from "next";
import { withAuthUser } from "next-firebase-auth";
import { Divider, Layout } from "../components";
import {
  ActionsComponent,
  AlliancesSection,
  CallToActionSection,
  ContactSection,
  IntroOne,
} from "../components/LandingSections";
import { useActions } from "../hooks";

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

export default withAuthUser()(IndexPage);
