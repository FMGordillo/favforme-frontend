import { render } from "../../../utils/testUtils";
import ActionsPage from "../../../pages/acciones";

describe("Actions page", () => {
  it("renders", () => {
    const { asFragment } = render(<ActionsPage />);
    expect(asFragment).toMatchSnapshot();
  });
});
