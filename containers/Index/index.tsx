import { useActions } from "@/hooks";
import { NextPage } from "next";
import { Divider, Layout } from "@/components";
import {
  ActionsComponent as Actions,
  AlliancesSection,
  ContactSection,
  CallToActionSection,
  IntroOne,
} from "./components";

export const IndexPage: NextPage = () => {
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
      <Actions actions={data?.actions} />
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
