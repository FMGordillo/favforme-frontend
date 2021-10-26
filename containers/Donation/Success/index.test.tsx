import { DonationSuccessContainer } from "./";
import { render } from "@/utils/testUtils";

describe("[Container] Donation success", () => {
  it("renders correctly", async () => {
    const { asFragment } = render(
      <DonationSuccessContainer loading={false} donation={null} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
