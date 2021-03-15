import { ActionI } from "@/lib/types";
import { Container, Layout } from "@/components";
import { MainContainer, ActionContainer, DonateButton } from "./styles";
import axios from "axios";
import { FunctionComponent, MouseEvent, useEffect, useState } from "react";

interface DonationProps {
  user: any;
  query: {
    id?: string;
  };
  action: ActionI | undefined;
}

export const DonationContainer: FunctionComponent<DonationProps> = ({
  action,
  query,
  user,
}) => {
  const [email, setEmail] = useState<string | undefined>(user?.email);
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [donationUrl, setDonationUrl] = useState("");

  useEffect(() => {
    setEmail(user?.email);
  }, [user?.email]);

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(email);
      if (!query.id || !amount || typeof amount !== "number" || !email)
        throw new Error("The required fields are missing");

      const response = await axios.post("/mp/generate", {
        amount,
        actionTitle: action?.title
          .toLowerCase()
          .split(" ")
          .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
          .join(" "),
        actionId: query.id,
        userData: {
          email,
          name: user.name,
          surname: user.surname,
        },
      });

      setDonationUrl(response.data.url);

      console.log(response);
    } catch (error) {
      console.info("TODO: HANDLE THIS");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout header title={`Donacion - ${action?.title}`}>
      <Container>
        <ActionContainer></ActionContainer>
        <MainContainer>
          <h1>Formulario</h1>
          <label htmlFor="amount">Monto a donar (en pesos)</label>
          <input
            id="amount"
            type="number"
            name="amount"
            disabled={loading}
            placeholder="100"
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            disabled={loading}
            defaultValue={user?.email}
            placeholder="juanperez@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <DonateButton disabled={loading} onClick={handleSubmit}>
            Generar link a MercadoPago
          </DonateButton>
        </MainContainer>
        <section>
          <h1>Link para donar</h1>
          {donationUrl && !loading && (
            <a
              style={{ textDecoration: "none" }}
              rel="noreferrer noopener"
              href={donationUrl}
            >
              Done aqui{" "}
              <span role="img" aria-label="blue heart">
                💙
              </span>
            </a>
          )}
        </section>
      </Container>
    </Layout>
  );
};
