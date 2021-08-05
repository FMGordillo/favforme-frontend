import { Action } from "@/lib/types";
import { ODS } from "@prisma/client";
import { useCalculations } from "./useCalculations";

const noDueDateAction: Action = {
  id: "1",
  title: "Test",
  description: "Test",
  organization: {
    id: "1",
    name: "Test org",
    history: "ASDF",
    homepage: "ASDF",
    logo: "ASDF",
    odsFocus: [ODS.CLEAN_ENERGY],
    createdAt: Date.now().toString(),
    updatedAt: Date.now().toString(),
    // socialNetworks: [],
  },
  current: 0,
  objective: 252000,
  mainImage: "ASDF",
  gallery: ["ASDF"],
  organizationId: "1",
  peopleBeneficted: 1,
  userId: 1,
  ods: [ODS.CLEAN_ENERGY],
  status: "INPROGRESS",
  deleted: false,
  createdAt: new Date("1995/01/01").toString(),
  updatedAt: new Date().toString(),
  closedAt: null,
};

describe("useCalculations", () => {
  it("Returns 0% when there's no due date", () => {
    const { dueDate } = useCalculations(noDueDateAction);
    expect(dueDate?.date).toBeUndefined();
  });
});
