import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import React, { useEffect, useState } from "react";
import { DonationI } from "@/lib/types";
import { DonationSuccessContainer } from "@/containers";
import { getDonation } from "@/service";
import { useRouter } from "next/router";

interface GetServerSidePropsReturn {
  props: {
    query: { id?: string };
    donation: DonationI | null;
  };
}

export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsReturn> {
  const { donationId } = context.query;

  if (typeof donationId === "string") {
    const donation = await getDonation({ variables: { id: donationId } });
    return {
      props: {
        query: { id: donationId },
        donation,
      },
    };
  } else {
    return {
      props: {
        query: { id: typeof donationId === "string" ? donationId : undefined },
        donation: null,
      },
    };
  }
}

const DonationSuccessPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ donation, query }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!query.id) {
      router.push("/");
    } else {
      setLoading(false);
      // TODO: No se?
    }
  }, [query.id, router]);

  return <DonationSuccessContainer loading={loading} donation={donation} />;
};

export default DonationSuccessPage;
