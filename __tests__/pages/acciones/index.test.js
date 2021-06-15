"use strict";
exports.__esModule = true;
var acciones_1 = require("../../../pages/acciones");
var testUtils_1 = require("../../../utils/testUtils");
describe("Actions page", function () {
    it("renders", function () {
        var asFragment = testUtils_1.render(<acciones_1["default"] actions={[]}/>).asFragment;
        expect(asFragment).toMatchSnapshot();
    });
});
