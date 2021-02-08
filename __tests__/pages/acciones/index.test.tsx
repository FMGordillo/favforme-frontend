import { render } from "../../../testUtils";
import ActionsPage from "../../../pages/acciones";

describe("Actions page", () => {
  it("renders", () => {
    const { asFragment } = render(<ActionsPage />);
    expect(asFragment).toMatchSnapshot();
  });
});
