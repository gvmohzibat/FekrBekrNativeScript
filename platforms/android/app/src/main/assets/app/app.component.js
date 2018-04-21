"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var test_service_1 = require("./services/test.service");
var router_1 = require("@angular/router");
var AppComponent = /** @class */ (function () {
    function AppComponent(test, router) {
        this.test = test;
        this.router = router;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app.component.html'
        }),
        __metadata("design:paramtypes", [test_service_1.TestService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
