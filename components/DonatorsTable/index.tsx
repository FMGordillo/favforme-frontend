import { UseDonationsData } from "@/hooks";
import { FunctionComponent } from "react";

interface DonatorsTableProps {
  data: UseDonationsData;
}

export const DonatorsTable: FunctionComponent<DonatorsTableProps> = ({
  data,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Nombre</th>
          <th>Monto</th>
        </tr>
      </thead>
      <tbody>
        {data?.donations.map((donation) => (
          <tr key={donation.id}>
            <td>{donation.createdAt}</td>
            <td>
              {donation.user.name
                ? `${donation.user.name} ${donation.user.surname}`
                : "Anonimo/a"}
            </td>
            <td>{donation.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
