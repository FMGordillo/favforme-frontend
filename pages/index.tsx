import { IndexPage as Index } from "@/containers";
import { NextPage } from "next";
import { useActions } from "@/service";

const IndexPage: NextPage = () => {
  const { data, loading } = useActions();
  return <Index actions={data} loading={loading} />;
};

export default IndexPage;
