import { Button } from "@/components";
import { useDonations } from "@/hooks";
import { parseToCurrency } from "@/lib/data";
import { format } from "date-fns";
import { FunctionComponent, useState } from "react";
import { Table, TableColumn, TableRow, TBody, THead } from "./styles";

interface DonatorsTableProps {
  actionId?: string;
}

export const DonatorsTable: FunctionComponent<DonatorsTableProps> = ({
  actionId,
}) => {
  const [lastDonation, setLastDonation] = useState<string | undefined>(
    undefined
  );
  const { data } = useDonations(
    Object.assign(
      {},
      {
        take: 5,
        skip: lastDonation ? 1 : 0,
        where: `{ AND:{ actionId: {equals: "${actionId}"} ${
          process.env.NODE_ENV === "production"
            ? "paymentStatus:{equals: SUCCESS}"
            : ""
        }} }`,
      },
      lastDonation && {
        cursor: `{ id: "${lastDonation}" }`,
      }
    )
  );

  return (
    <>
      <Table>
        <THead>
          <TableRow>
            <th>Fecha</th>
            <th>Nombre</th>
            <th>Monto</th>
          </TableRow>
        </THead>
        <TBody>
          {data?.donations.map((donation) => (
            <TableRow key={donation.id}>
              <TableColumn>
                {format(new Date(donation.createdAt), "yyyy/MM/dd")}
              </TableColumn>
              <TableColumn>
                {donation.user.name
                  ? `${donation.user.name} ${donation.user.surname}`
                  : "Anonimo/a"}
              </TableColumn>
              <TableColumn>${parseToCurrency(donation.amount)}</TableColumn>
            </TableRow>
          ))}
        </TBody>
      </Table>
      <Button
        onClick={() => {
          setLastDonation(data?.donations.pop()?.id);
        }}
      >
        Cargar mas
      </Button>
    </>
  );
};
