import { render } from "../../utils/testUtils";
import AboutUsPage from "../../pages/index";

describe("About us page", () => {
  it("renders", () => {
    const { asFragment } = render(<AboutUsPage />);
    expect(asFragment).toMatchSnapshot();
  });
});
