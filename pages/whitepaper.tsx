import { Container as BaseContainer, Layout } from "@/components";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";
import { getPage } from "@/lib/notion";
import styled from "styled-components";

const Container = styled(BaseContainer)`
  .notion-viewport {
    position: relative;
  }
`;

type GetStaticPropsData = {
  site: unknown;
  pageId: string;
  recordMap: ExtendedRecordMap;
};

export const getStaticProps: GetStaticProps<GetStaticPropsData> = async () => {
  const pageId = process.env.NEXT_PUBLIC_NOTION_PAGE_ID_WHITEPAPER || "";
  const whitepaperData = await getPage(pageId);
  return {
    props: {
      pageId,
      site: null,
      recordMap: whitepaperData,
    },
  };
};

const WhitepaperPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => {
  return (
    <Layout header title="Whitepaper">
      <Container>
        <NotionRenderer {...props} />
      </Container>
    </Layout>
  );
};

export default WhitepaperPage;
