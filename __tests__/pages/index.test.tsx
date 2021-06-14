import { render } from "../../utils/testUtils";
import IndexPage from "../../pages/index";

describe("Index page", () => {
  it("renders", () => {
    const { asFragment } = render(<IndexPage actions={[]} />);
    expect(asFragment).toMatchSnapshot();
  });
});
