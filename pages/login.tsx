import { NextPage } from "next";
import { AuthAction, withAuthUser } from "next-firebase-auth";
import { FirebaseAuth, FullPageLoading, Layout } from "../components";

const LoginPage: NextPage = () => {
  return (
    <Layout header title="Iniciar sesión">
      <FirebaseAuth />
    </Layout>
  );
};

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.RENDER,
  LoaderComponent: FullPageLoading,
})(LoginPage);
