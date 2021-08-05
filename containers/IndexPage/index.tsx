import {
  ActionsComponent,
  AlliancesSection,
  CallToActionSection,
  ContactSection,
  IntroOne,
  RSE,
} from "./components";
import { Divider, Layout } from "@/components";
import { Action } from "@/lib/types";
import { NextPage } from "next";

interface IndexPageProps {
  actions: Action[];
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
      <ActionsComponent actions={actions} loading={false} />
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
