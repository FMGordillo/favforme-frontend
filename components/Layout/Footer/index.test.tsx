import { Footer } from "./";
import { render } from "@/utils/testUtils";

describe("[Componentes] Footer", () => {
  it("renders correctly", async () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
