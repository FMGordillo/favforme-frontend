import { NextPage } from "next";
import { useRouter } from "next/router";

const AccionPage: NextPage = () => {
  const router = useRouter();
  const { actionName } = router.query;
  return (
    <div>
      <h1>Accion {actionName}</h1>
    </div>
  );
};

export default AccionPage;
