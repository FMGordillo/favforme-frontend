import { useRouter } from "next/router";

const AccionPage = () => {
  const router = useRouter();
  const { actionName } = router.query;
  return (
    <div>
      <h1>Accion {actionName}</h1>
    </div>
  );
};

export default AccionPage;
