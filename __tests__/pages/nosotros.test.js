"use strict";
exports.__esModule = true;
var nosotros_1 = require("../../pages/nosotros");
var testUtils_1 = require("../../utils/testUtils");
describe("About us page", function () {
    it("renders", function () {
        var asFragment = testUtils_1.render(<nosotros_1["default"] />).asFragment;
        expect(asFragment).toMatchSnapshot();
    });
});
