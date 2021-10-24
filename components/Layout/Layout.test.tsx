import { Layout } from "./";
import { render } from "@/utils/testUtils";

describe("[Container] Layout", () => {
  it("renders correctly", async () => {
    const { asFragment } = render(<Layout />);
    expect(asFragment()).toMatchSnapshot();
  });
});
