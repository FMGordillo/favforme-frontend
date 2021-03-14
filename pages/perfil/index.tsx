import { NextPage } from "next";
import { AuthAction, withAuthUser } from "next-firebase-auth";
import { ProfilePage as Profile } from "@/containers";

const ProfilePage: NextPage = () => <Profile />;

export default withAuthUser({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(ProfilePage);
