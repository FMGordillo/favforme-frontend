import { NextPage } from "next";
import Image from "next/image";
import { Container, Layout } from "components";
import styled from "styled-components";
import { useUser } from "lib/hooks";
import { AuthAction, withAuthUser } from "next-firebase-auth";

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
  const { user, firebaseUser } = useUser();

  return (
    <Layout header title="Tu Perfil">
      <Container>
        <section>
          <h1>Datos personales</h1>
          <ProfileContainer>
            <div className="img">
              {/* TODO: agregar algun placeholder para esto */}
              <Image
                src={firebaseUser?.photoURL || "/"}
                alt="Avatar"
                height={100}
                width={100}
              />
            </div>
            <div className="data">Email: {user?.email}</div>
          </ProfileContainer>
        </section>
        <section>
          <h1>Donaciones</h1>
          <p>Proximamente...</p>
        </section>
      </Container>
    </Layout>
  );
};

export default withAuthUser({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(ProfilePage);
