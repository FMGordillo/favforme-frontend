"use strict";
exports.__esModule = true;
var index_1 = require("../../pages/index");
var testUtils_1 = require("../../utils/testUtils");
describe("Index page", function () {
    it("renders", function () {
        var asFragment = testUtils_1.render(<index_1["default"] actions={[]}/>).asFragment;
        expect(asFragment).toMatchSnapshot();
    });
});
