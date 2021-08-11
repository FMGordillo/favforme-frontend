import { ActionI } from "@/lib/types";
import { makeCalculations } from "./actionUtils";

const noDueDateAction: ActionI = {
  id: "1",
  title: "Test",
  description: "Test",
  organization: {
    id: "1",
    name: "Test org",
    actions: [],
    socialNetworks: [],
  },
  current: "0",
  objective: "252000",
  ods: [],
  status: "INPROGRESS",
  deleted: false,
  createdAt: new Date("1995/01/01").toString(),
};

describe("useCalculations", () => {
  it("Returns 0% when there's no due date", () => {
    const { dueDate } = makeCalculations(noDueDateAction);
    expect(dueDate?.date).toBeUndefined();
  });
});
