import { IndexPage as Index } from "@/containers";
import { NextPage } from "next";
import { withAuthUser } from "next-firebase-auth";

const IndexPage: NextPage = () => <Index />;

export default withAuthUser()(IndexPage);
