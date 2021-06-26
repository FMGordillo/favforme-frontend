import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { ActionRequestContainer } from "@/containers";

export const getServerSideProps: GetServerSideProps<{
  ongId: string | undefined;
}> = async (context) => {
  const id = context.query?.ong;
  return {
    props: {
      ongId: Array.isArray(id) ? id[0] : id,
    },
  };
};

const ActionRequest: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ ongId }) => {
  console.log(ongId);
  return <ActionRequestContainer />;
};

export default ActionRequest;
