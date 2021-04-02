import { useRouter } from "next/router";
import { NextPage } from "next";
import { Layout } from "../../components";
import { useEffect, useState } from "react";

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
