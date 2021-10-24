import { DonationI } from "@/lib/types";
import { DonatorsTable } from "./";
import { render } from "@/utils/testUtils";

const data: DonationI[] = [
  {
    id: "1",
    currency: "ARS",
    user: {
      id: "2",
      name: null,
      surname: null,
      email: "test@tester.com",
      userType: "USER",
    },
    action: {
      id: "3",
      title: "test",
      description: "A test description",
      objective: "5",
      current: "1",
      createdAt: new Date().toString(),
      status: "INPROGRESS",
      organization: {
        id: "4",
        name: "test",
        actions: [],
        socialNetworks: [],
      },
      deleted: false,
      ods: [],
    },
    actionId: "3",
    userId: "2",
    amount: "100",
    paymentStatus: "SUCCESS",
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
  },
];

describe("[Container] About us", () => {
  it("renders correctly", async () => {
    const { asFragment } = render(<DonatorsTable data={data} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
