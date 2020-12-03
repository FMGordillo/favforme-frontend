import { shallow } from "enzyme";
import IndexPage from "../../pages/index";

describe("Page /", () => {
  it("should render", () => {
    const tree = shallow(<IndexPage />);
    expect(tree).toMatchSnapshot();
  });
});
