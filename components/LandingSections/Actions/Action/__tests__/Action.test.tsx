import { render } from "../../../../../utils/testUtils";
import { ActionComponent } from "../index";

describe("Action component", () => {
  it("renders", () => {
    const { asFragment } = render(<ActionComponent />);
    expect(asFragment).toMatchSnapshot();
  });
});
