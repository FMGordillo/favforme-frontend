import { Layout } from "components";
import { NextPage } from "next";
import { useState } from "react";

const DonationPage: NextPage = () => {
  const [amount, setAmount] = useState(0);

  return (
    <Layout header title="Donacion">
      <section>
        <label htmlFor="amount">Monto a donar (en pesos)</label>
        <input
          id="amount"
          type="number"
          name="amount"
          placeholder="$100"
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </section>
    </Layout>
  );
};

export default DonationPage;
