import { Layout, FirebaseAuth, FullPageLoading } from "components";
import { withAuthUser, AuthAction } from "next-firebase-auth";
import { NextPage } from "next";

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
