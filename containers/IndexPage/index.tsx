import {
  ActionsComponent as Actions,
  AlliancesSection,
  CallToActionSection,
  ContactSection,
  IntroOne,
  RSE,
} from "./components";
import { Divider, Layout } from "@/components";
import { ActionIndex } from "@/pages";
import { NextPage } from "next";

interface IndexPageProps {
  actions: ActionIndex[];
}

export const IndexPage: NextPage<IndexPageProps> = ({ actions }) => {
  return (
    <Layout
      headProps={{
        title: "Inicio",
      }}
      header
      headerProps={{
        isIndex: true,
      }}
    >
      <Divider />
      <IntroOne />
      <Divider />
      <Actions actions={actions} loading={false} />
      <Divider />
      <CallToActionSection />
      <Divider />
      <RSE />
      <Divider />
      <AlliancesSection />
      <Divider />
      <ContactSection />
      <Divider />
    </Layout>
  );
};
