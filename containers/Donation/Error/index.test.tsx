import { DonationErrorContainer } from "./";
import { render } from "@/utils/testUtils";

describe("[Container] Donation error", () => {
  it("renders correctly", async () => {
    const { asFragment } = render(<DonationErrorContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
