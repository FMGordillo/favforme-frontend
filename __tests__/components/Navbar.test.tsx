import { shallow } from "enzyme";
import { NavBar } from "../../components/Landing/Navbar";

let toggleModal;

beforeEach(() => {
  toggleModal = jest.fn();
});

describe("NavBar component", () => {
  it("should render", () => {
    const component = shallow(<NavBar toggleModal={toggleModal} />);
    expect(component).toMatchSnapshot();
  });
});
