import { IndexPage } from "./";
import { render } from "@/utils/testUtils";

describe("[Container] Index", () => {
  it("renders correctly", async () => {
    const { asFragment } = render(<IndexPage actions={[]} loading={false} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
