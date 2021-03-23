import { useCalculations } from "..";
import { ActionI } from "../../lib/types";

describe("useCalculations hook", () => {
  it("returns correctly", () => {
    const data: ActionI = {
      id: "1",
      deleted: false,
      status: "INPROGRESS",
      description: "Test",
      organizationId: 1,
      organization: {
        id: "1",
        name: "Org test",
        actions: [],
        socialNetworks: [],
      },
      title: "Action test",
      current: 10,
      objective: 1000,
    };

    const useCalculationsHook = useCalculations(data);

    expect(useCalculationsHook.completition).toBe(
      ((data.current * 100) / data.objective).toFixed()
    );
  });

  it("returns zero if receives undefined", () => {
    const data = undefined;

    const useCalculationsHook = useCalculations(data);

    expect(useCalculationsHook.finalAmount).toBe("0,00");
    expect(useCalculationsHook.currentAmount).toBe("0,00");
    expect(useCalculationsHook.completition).toBe("0");
  });
});
