import { useEffect, useState } from "react";
import { Layout } from "@/components";
import { NextPage } from "next";
import { useRouter } from "next/router";

const DonationRedirectionPage: NextPage = () => {
  const [seconds, setSeconds] = useState(5);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/donacion/exito");
    }, 5000);
    const secondsTimer = setInterval(() => {
      seconds > 0 && setSeconds((s) => s - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      clearInterval(secondsTimer);
    };
  }, [router, seconds]);

  return (
    <Layout>
      <p>Te estamos redireccionando... {seconds}</p>
    </Layout>
  );
};

export default DonationRedirectionPage;
