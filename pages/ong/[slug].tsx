import { GetStaticPaths, GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: "/404",
    },
    props: {},
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
    <div>
      <p>Haber</p>
    </div>
  );
};

export default Organization;
