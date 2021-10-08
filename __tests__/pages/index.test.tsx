import IndexPage from "../../pages/index";
import { render } from "../../utils/testUtils";

describe("Index page", () => {
  it("renders", () => {
    const { asFragment } = render(<IndexPage />);
    expect(asFragment).toMatchSnapshot();
  });
});
