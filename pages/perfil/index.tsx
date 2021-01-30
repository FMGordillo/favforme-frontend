import { NextPage } from "next";
import { Layout } from "components";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: grid;
  grid-template-areas: "
    image data
  ";
  grid-gap: 1.25em;

  .img {
    justify-self: right;
    grid-area: image;
  }

  .data {
    grid-area: data;
  }
`;

const ProfilePage: NextPage = () => {
  return (
    <Layout>
      <ProfileContainer></ProfileContainer>
    </Layout>
  );
};

export default ProfilePage;
