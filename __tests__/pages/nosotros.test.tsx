import { render } from "../../testUtils";
import AboutUsPage from "../../pages/index";

describe("About us page", () => {
  it("renders", () => {
    const { asFragment } = render(<AboutUsPage />);
    expect(asFragment).toMatchSnapshot();
  });
});
