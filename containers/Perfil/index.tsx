import { Button, Container, Layout } from "@/components";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { NextPage } from "next";
import { useFormik } from "formik";

export const ProfilePage: NextPage = () => {
  const { data: session } = useSession();

  const handleSubmit = () => {
    console.log("WIP");
  };

  const formik = useFormik({
    initialValues: {
      name: session?.user?.name || "", // TODO: Como hacemos aca?
      email: session?.user?.email || "",
      surname: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <Layout header title="Tu Perfil">
      <Container>
        <Button onClick={() => signOut({ callbackUrl: "/" })}>
          Cerrar sesi&oacute;n
        </Button>
        <section>
          <h1>Datos personales</h1>
          <div className="img">
            {/* TODO: agregar algun placeholder para esto */}
            <Image
              src={session?.user?.image ?? "/images/avatar_placeholder.gif"}
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
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Juan Martin"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <label htmlFor="surname">Apellido(s)</label>
            <input
              id="surname"
              type="text"
              name="surname"
              placeholder="Gorrieta Canas"
              value={formik.values.surname}
              onChange={formik.handleChange}
            />
          </div>
          <Button disabled onClick={() => console.log("CLICKED")}>
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
