import { useFormik } from "formik";
import { Button, Container, Layout } from "@/components";
import { useUser } from "@/hooks";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";

export const ProfilePage: NextPage = () => {
  const { user, firebaseUser } = useUser();

  const handleSubmit = () => {
    console.log("WIP");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      surname: "",
    },
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    formik.setValues({
      email: user?.email,
      name: user?.name,
      surname: user?.surname,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.name, user?.email, user?.surname]);

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
