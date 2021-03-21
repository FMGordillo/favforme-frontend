import { Button } from "@/components";
import { usePaginatedDonations } from "@/hooks";
import { parseToCurrency } from "@/lib/data";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { Table, TableColumn, TableRow, TBody, THead } from "./styles";

interface DonatorsTableProps {
  actionId?: string;
}

export const DonatorsTable: FunctionComponent<DonatorsTableProps> = ({
  actionId,
}) => {
  const router = useRouter();
  const { data } = usePaginatedDonations(
    Object.assign(
      {},
      {
        take: 6,
        where: `{ AND:{ actionId: {equals: "${actionId}"} ${
          process.env.NODE_ENV === "production"
            ? "paymentStatus:{equals: SUCCESS}"
            : ""
        }} }`,
      }
    )
  );

  return (
    <>
      <Table>
        <THead>
          <TableRow>
            <TableColumn>Fecha</TableColumn>
            <TableColumn>Empresa / particular</TableColumn>
            <TableColumn>Contribuidor</TableColumn>
            <TableColumn>Monto</TableColumn>
          </TableRow>
        </THead>
        <TBody>
          {data?.donations.map((donation) => (
            <TableRow key={donation.id}>
              <TableColumn>
                {format(new Date(donation.createdAt), "yyyy/MM/dd")}
              </TableColumn>
              <TableColumn>
                {donation.user.userType === "USER"
                  ? "Donante particular"
                  : donation.user.name}
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
          router.push("/donaciones");
        }}
      >
        Cargar mas
      </Button>
    </>
  );
};
