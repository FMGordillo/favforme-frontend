import { TBody, THead, Table, TableColumn, TableRow } from "./styles";
import { Button } from "@/components";
import { FunctionComponent } from "react";
import { format } from "date-fns";
import { parseToCurrency } from "@/lib/data";
import { usePaginatedDonations } from "@/hooks";
import { useRouter } from "next/router";

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
          process.env.NEXT_PUBLIC_ENVIRONMENT === "production"
            ? "paymentStatus:{equals: SUCCESS}"
            : ""
        }} }`,
        orderBy: `{ createdAt: desc }`,
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
            <TableColumn>Total (pesos argentinos)</TableColumn>
          </TableRow>
        </THead>
        <TBody>
          {data && data?.donations.length > 0 ? (
            data.donations.map((donation) => (
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
                <TableColumn>
                  {/* TODO: FIXME */}${parseToCurrency(Number(donation.amount))}
                </TableColumn>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableColumn>Cargando</TableColumn>
              <TableColumn>Cargando</TableColumn>
              <TableColumn>Cargando</TableColumn>
              <TableColumn>Cargando</TableColumn>
            </TableRow>
          )}
        </TBody>
      </Table>
      <Button
        style={{ display: "none" }}
        onClick={() => {
          router.push("/donaciones");
        }}
      >
        Cargar mas
      </Button>
    </>
  );
};
