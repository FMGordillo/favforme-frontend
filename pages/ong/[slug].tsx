import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout } from "@/components";

export const getStaticProps: GetStaticProps = async () => {
  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { slug: "1" },
      },
    ],
    fallback: false,
  };
};

const Organization: NextPage = () => {
  return (
    <Layout header title="Sumá tu acción">
      <p>Haber</p>
    </Layout>
  );
};

export default Organization;
