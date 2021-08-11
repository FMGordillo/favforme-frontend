import { Action } from "../index";
import { render } from "../../../utils/testUtils";

describe("Action component", () => {
  it("renders", () => {
    const { asFragment } = render(<Action data={null} />);
    expect(asFragment).toMatchSnapshot();
  });
});
