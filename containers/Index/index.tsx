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
  const { data, isValidating } = useActions();

  return (
    <Layout
      header
      headerProps={{
        isIndex: true,
        //title: "Estás en FavForMe",
      }}
    >
      <Divider />
      <IntroOne />
      <Divider />
      <Actions actions={data?.actions} loading={isValidating} />
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
