import { TBody, THead, Table, TableColumn, TableRow } from "./styles";
import { Button } from "@/components";
import { DonationI } from "@/lib/types";
import { FunctionComponent } from "react";
import { format } from "date-fns";
import { parseToCurrency } from "@/lib/data";
import { useRouter } from "next/router";

interface DonatorsTableProps {
  data: DonationI[];
}

export const DonatorsTable: FunctionComponent<DonatorsTableProps> = ({
  data,
}) => {
  const router = useRouter();

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
          {data.length > 0 ? (
            data.map((donation) => (
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
                    ? `${donation.user.name || ""} ${
                        donation.user.surname || ""
                      }`
                    : "Anonimo/a"}
                </TableColumn>
                <TableColumn>${parseToCurrency(donation.amount)}</TableColumn>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableColumn colSpan={4}>
                No se registran donaciones{" "}
                <span role="img" aria-label="Pleading face">
                  🥺
                </span>
              </TableColumn>
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
