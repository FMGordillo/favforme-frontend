import {
  AlliancesSection,
  CallToActionSection,
  ContactSection,
  IntroOne,
  ODSMain,
  RSE,
} from "./components";
import { Divider, Layout } from "@/components";
import { ActionI } from "@/lib/types";
import { NextPage } from "next";
import dynamic from "next/dynamic";

interface IndexPageProps {
  actions: ActionI[];
  loading: boolean;
}

// @ts-ignore
const DynamicActions = dynamic(() =>
  import("./components").then((mod) => mod.ActionsComponent)
);

export const IndexPage: NextPage<IndexPageProps> = ({ actions, loading }) => {
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
      <DynamicActions actions={actions} loading={loading} />
      <Divider />
      <ODSMain />
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
