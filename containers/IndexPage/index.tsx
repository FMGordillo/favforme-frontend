import { Divider, Layout } from "@/components";
import { ActionI } from "@/lib/types";
import { NextPage } from "next";
import {
  ActionsComponent as Actions,
  AlliancesSection,
  CallToActionSection,
  ContactSection,
  IntroOne,
  RSE,
} from "./components";

interface IndexProps {
  actions: ActionI[];
}

export const IndexPage: NextPage<IndexProps> = ({ actions }) => {
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
      {/* TODO: Remove `loading` prop */}
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
