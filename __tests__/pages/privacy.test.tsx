import { shallow } from "enzyme";
import PrivacyPage from "../../pages/privacy";

describe("Page /", () => {
  it("should render", () => {
    const tree = shallow(<PrivacyPage />);
    expect(tree).toMatchSnapshot();
  });
});
