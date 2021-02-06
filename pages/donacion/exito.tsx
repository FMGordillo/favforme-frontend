import { NextPage } from "next";
import { Layout } from "components";
import { useRouter } from "next/router";

const DonationSuccessPage: NextPage = () => {
  const router = useRouter();

  return (
    <Layout>
      {!router.query.donationId && <span>No tenes que tar aca &gt;:v</span>}
    </Layout>
  );
};

export default DonationSuccessPage;
