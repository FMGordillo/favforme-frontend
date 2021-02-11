import { NextPage } from "next";
import { AuthAction, withAuthUser } from "next-firebase-auth";
import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";
import { Button, Container, Layout } from "../../components";
import { useUser } from "../../lib/hooks";

const ProfilePage: NextPage = () => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [surname, setSurname] = useState<string | undefined>(undefined);
  const { user, firebaseUser, updateUser } = useUser();

  useEffect(() => {
    setName(user?.name);
    setEmail(user?.email);
    setSurname(user?.surname);
  }, [user?.name, user?.email, user?.surname]);

  const handleUpdate = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (name && email && surname) {
      updateUser({
        name,
        email,
        surname,
      });
    }
  };

  return (
    <Layout header title="Tu Perfil">
      <Container>
        <section>
          <h1>Datos personales</h1>
          <div className="img">
            {/* TODO: agregar algun placeholder para esto */}
            <Image
              src={firebaseUser?.photoURL || "/"}
              alt="Avatar"
              height={100}
              width={100}
            />
          </div>
          <div className="data">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="pepe@mail.com"
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
            />
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Juan Martin"
              onChange={(e) => setName(e.target.value)}
              defaultValue={name}
            />
            <label htmlFor="surname">Apellido(s)</label>
            <input
              id="surname"
              type="text"
              name="surname"
              placeholder="Gorrieta Canas"
              onChange={(e) => setSurname(e.target.value)}
              defaultValue={surname}
            />
          </div>
          <Button disabled onClick={handleUpdate}>
            Guardar cambios
          </Button>
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
