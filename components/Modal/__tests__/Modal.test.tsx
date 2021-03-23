import { render } from "../../../utils/testUtils";
import { Modal } from "../";
import React from "react";

describe("Modal component", () => {
  const onClose = jest.fn();

  it("renders", () => {
    const open = false;
    const component = render(<Modal open={open} onClose={onClose} />);
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
