import { Header } from "./";
import { render } from "@/utils/testUtils";

// TODO: improve tests here!
describe("[Componentes] Header", () => {
  it("renders correctly", async () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
