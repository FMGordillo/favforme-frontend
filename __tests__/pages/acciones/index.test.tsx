import ActionsPage from "../../../pages/acciones";
import { render } from "../../../utils/testUtils";

describe("Actions page", () => {
  it("renders", () => {
    const { asFragment } = render(<ActionsPage actions={[]} />);
    expect(asFragment).toMatchSnapshot();
  });
});
