import { render } from "../../../utils/testUtils";
import { Modal } from "../";
import React from "react";

describe("Modal component", () => {
  it("renders", () => {
    const component = render(<Modal />);
    expect(component).toMatchSnapshot();
  });

  // it("closes when onClose is executed", () => {
  //   const { container } = render(
  //     <Modal open={true} onClose={onClose}>
  //       <p>Content</p>
  //     </Modal>
  //   );

  // console.log(container.firstChild);
  // expect(container.firstChild).toBeVisible();
  // onClose();
  // expect(container.firstChild).not.toBeVisible();
  // });
});
