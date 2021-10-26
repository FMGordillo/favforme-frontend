import { AboutUsPage } from "./";
import { render } from "@/utils/testUtils";

describe("[Container] About us", () => {
  it("renders correctly", async () => {
    const { asFragment } = render(<AboutUsPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
