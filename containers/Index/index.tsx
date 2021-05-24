import { useActions, useNotifications } from "@/hooks";
import { NextPage } from "next";
import { Divider, Layout } from "@/components";
import {
  RSE,
  ActionsComponent as Actions,
  AlliancesSection,
  ContactSection,
  CallToActionSection,
  IntroOne,
} from "./components";

export const IndexPage: NextPage = () => {
  const { data, isValidating } = useActions();

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
      <Actions actions={data?.actions} loading={isValidating} />
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
