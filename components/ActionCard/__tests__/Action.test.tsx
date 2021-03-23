import { render } from "../../../utils/testUtils";
import { Action } from "../index";

describe("Action component", () => {
  it("renders", () => {
    const { asFragment } = render(<Action />);
    expect(asFragment).toMatchSnapshot();
  });
});
