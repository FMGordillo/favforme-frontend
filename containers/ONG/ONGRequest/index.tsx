import { Button, FormInput, Layout } from "@/components";
import { Form } from "./styles";
import { NextPage } from "next";
import { useFormik } from "formik";

interface ONGRequestProps {
  onSubmit: () => void;
}

interface FormValues {
  name: string;
  cuit: number;
  representative_name: string;
  representative_email: string;
}

export const ONGRequestContainer: NextPage<ONGRequestProps> = ({
  onSubmit,
}) => {
  const { handleBlur, handleChange } = useFormik<FormValues>({
    initialValues: {
      cuit: 0,
      name: "",
      representative_name: "",
      representative_email: "",
    },
    onSubmit,
  });
  return (
    <Layout title="Sumar mi ONG" header>
      <p>
        Por favor, llen&aacute; estos datos, y nos pondremos en contacto contigo
      </p>
      <Form>
        <label htmlFor="name">Nombre de tu organizaci&oacute;n</label>
        <FormInput
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="FavForMe"
          name="name"
        />
        <label htmlFor="cuit">CUIT de la ONG</label>
        <FormInput onBlur={handleBlur} onChange={handleChange} name="cuit" />
        <label htmlFor="representative_name">
          Nombre del representante de la ONG (tu nombre)
        </label>
        <FormInput
          onBlur={handleBlur}
          onChange={handleChange}
          type="number"
          name="representative_name"
        />
        <label htmlFor="representative_email">
          Email del representante de la ONG (tu email)
        </label>
        <FormInput
          onBlur={handleBlur}
          onChange={handleChange}
          type="email"
          name="representative_email"
        />
        <div>
          <Button color="secondary">Borrar formulario</Button>
          <Button>Enviar datos</Button>
        </div>
      </Form>
    </Layout>
  );
};
