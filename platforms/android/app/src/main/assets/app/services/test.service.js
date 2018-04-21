"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TestService = /** @class */ (function () {
    function TestService() {
    }
    TestService.prototype.aler = function () {
        alert('About to register');
    };
    TestService = __decorate([
        core_1.Injectable()
    ], TestService);
    return TestService;
}());
exports.TestService = TestService;
