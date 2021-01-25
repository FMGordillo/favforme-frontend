import Image from "next/image";
import { NextPage } from "next";
import { Layout } from "components";
import styled from "styled-components";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

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
  const { user } = useAuth0();
  return (
    <Layout>
      <ProfileContainer>
        <div className="img">
          <Image width={150} height={150} layout="fixed" src={user?.picture} />
        </div>
        <div className="data">
          <p>Email: {user?.email}</p>
          <p>Nombre: {user?.given_name}</p>
          <p>Apellido: {user?.family_name}</p>
        </div>
      </ProfileContainer>
    </Layout>
  );
};

export default withAuthenticationRequired(ProfilePage);
