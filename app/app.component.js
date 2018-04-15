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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsd0RBQXNEO0FBQ3RELDBDQUF5QztBQU16QztJQUNDLHNCQUFvQixJQUFpQixFQUFVLE1BQWM7UUFBekMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRHJELFlBQVk7UUFKeEIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDakMsQ0FBQzt5Q0FFeUIsMEJBQVcsRUFBa0IsZUFBTTtPQURqRCxZQUFZLENBRXhCO0lBQUQsbUJBQUM7Q0FBQSxBQUZELElBRUM7QUFGWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGVzdFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Rlc3Quc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdteS1hcHAnLFxuXHR0ZW1wbGF0ZVVybDogJ2FwcC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSB0ZXN0OiBUZXN0U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cbn1cbiJdfQ==