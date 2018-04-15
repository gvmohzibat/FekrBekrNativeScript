"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var test_service_1 = require("./services/test.service");
var app_routing_1 = require("./app.routing");
var simple_game_service_1 = require("./views/simple-game/simple-game.service");
var dot_input_component_1 = require("./views/simple-game/dot-input/dot-input.component");
var dot_component_1 = require("./views/simple-game/dot/dot.component");
var color_pallet_component_1 = require("./views/simple-game/color-pallet/color-pallet.component");
var user_answers_component_1 = require("./views/simple-game/user-answers/user-answers.component");
var question_component_1 = require("./views/simple-game/question/question.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent].concat(app_routing_1.navigatableComponents, [dot_input_component_1.DotInputComponent, dot_component_1.DotComponent, color_pallet_component_1.ColorPalletComponent, user_answers_component_1.UserAnswersComponent, question_component_1.QuestionComponent]),
            bootstrap: [app_component_1.AppComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.routes)
            ],
            providers: [test_service_1.TestService, simple_game_service_1.SimpleGameService],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBRXZFLGlEQUErQztBQUMvQyx3REFBc0Q7QUFHdEQsNkNBQThEO0FBQzlELCtFQUE0RTtBQUM1RSx5RkFBc0Y7QUFDdEYsdUVBQXFFO0FBQ3JFLGtHQUErRjtBQUMvRixrR0FBK0Y7QUFDL0Ysc0ZBQW9GO0FBZXBGO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFickIsZUFBUSxDQUFDO1lBQ1QsWUFBWSxHQUFHLDRCQUFZLFNBQUssbUNBQXFCLEdBQUUsdUNBQWlCLEVBQUUsNEJBQVksRUFBRSw2Q0FBb0IsRUFBRSw2Q0FBb0IsRUFBRSxzQ0FBaUIsRUFBQztZQUN0SixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRTtnQkFDUix3Q0FBa0I7Z0JBQ2xCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QixpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxvQkFBTSxDQUFDO2FBQ3hDO1lBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSx1Q0FBaUIsQ0FBQztZQUMzQyxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUMzQixDQUFDO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGVzdFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3Rlc3Quc2VydmljZSc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9saXN0L2xpc3QuY29tcG9uZW50JztcblxuaW1wb3J0IHsgcm91dGVzLCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcbmltcG9ydCB7IFNpbXBsZUdhbWVTZXJ2aWNlIH0gZnJvbSAnLi92aWV3cy9zaW1wbGUtZ2FtZS9zaW1wbGUtZ2FtZS5zZXJ2aWNlJztcbmltcG9ydCB7IERvdElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9zaW1wbGUtZ2FtZS9kb3QtaW5wdXQvZG90LWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb3RDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdzL3NpbXBsZS1nYW1lL2RvdC9kb3QuY29tcG9uZW50JztcbmltcG9ydCB7IENvbG9yUGFsbGV0Q29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9zaW1wbGUtZ2FtZS9jb2xvci1wYWxsZXQvY29sb3ItcGFsbGV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVc2VyQW5zd2Vyc0NvbXBvbmVudCB9IGZyb20gJy4vdmlld3Mvc2ltcGxlLWdhbWUvdXNlci1hbnN3ZXJzL3VzZXItYW5zd2Vycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUXVlc3Rpb25Db21wb25lbnQgfSBmcm9tICcuL3ZpZXdzL3NpbXBsZS1nYW1lL3F1ZXN0aW9uL3F1ZXN0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudCwgLi4ubmF2aWdhdGFibGVDb21wb25lbnRzLCBEb3RJbnB1dENvbXBvbmVudCwgRG90Q29tcG9uZW50LCBDb2xvclBhbGxldENvbXBvbmVudCwgVXNlckFuc3dlcnNDb21wb25lbnQsIFF1ZXN0aW9uQ29tcG9uZW50XSxcblx0Ym9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcblx0aW1wb3J0czogW1xuXHRcdE5hdGl2ZVNjcmlwdE1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcblx0XHROYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXG5cdF0sXG5cdHByb3ZpZGVyczogW1Rlc3RTZXJ2aWNlLCBTaW1wbGVHYW1lU2VydmljZV0sXG5cdHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==