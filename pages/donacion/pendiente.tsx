import { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "components";

const PendingPage: NextPage = () => {
  const router = useRouter();
  return (
    <Layout>
      <p>
        {!router.query.donationId && <span>No tenes que tar aca &gt;:v</span>}
      </p>
    </Layout>
  );
};

export default PendingPage;
