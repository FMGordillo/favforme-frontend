import { DonationPendingContainer } from "./";
import { render } from "@/utils/testUtils";

describe("[Container] Donation pending", () => {
  it("renders correctly", async () => {
    const { asFragment } = render(<DonationPendingContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
