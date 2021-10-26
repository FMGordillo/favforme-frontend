import { Button, Container, Layout } from "@/components";
import Image from "next/image";
import { NextPage } from "next";
import { useFormik } from "formik";

export const ProfilePage: NextPage = () => {
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

  return (
    <Layout header title="Tu Perfil">
      <Container>
        <section>
          <h1>Datos personales</h1>
          <div className="img">
            {/* TODO: agregar algun placeholder para esto */}
            <Image
              src={"/images/avatar_placeholder.gif"}
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
