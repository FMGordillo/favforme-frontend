import AboutUsPage from "../../pages/nosotros";
import { render } from "../../utils/testUtils";

describe("About us page", () => {
  it("renders", () => {
    const { asFragment } = render(<AboutUsPage />);
    expect(asFragment).toMatchSnapshot();
  });
});
