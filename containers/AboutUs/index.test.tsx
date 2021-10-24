import { AboutUsPage } from "./";
import { render } from "@/utils/testUtils";

describe("[Container] About us", () => {
  it("renders correctly", () => {
    const { container } = render(<AboutUsPage />);
    expect(container).toMatchSnapshot();
  });
});
