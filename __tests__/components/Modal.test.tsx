import { shallow } from "enzyme";
import { Modal } from "../../components/Modal";

let open;
let onClose;

beforeEach(() => {
  open = false;
  onClose = jest.fn();
});

describe("Modal component", () => {
  it("should allow children to render", () => {
    const wrapper = shallow(
      <Modal open={open} onClose={onClose}>
        <div className="content"></div>
      </Modal>
    );

    expect(wrapper.contains(<div className="content"></div>)).toBeTruthy();
  });
});
