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
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent].concat(app_routing_1.navigatableComponents, [dot_input_component_1.DotInputComponent, dot_component_1.DotComponent, color_pallet_component_1.ColorPalletComponent, user_answers_component_1.UserAnswersComponent]),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxnRkFBOEU7QUFDOUUsc0RBQXVFO0FBRXZFLGlEQUErQztBQUMvQyx3REFBc0Q7QUFHdEQsNkNBQThEO0FBQzlELCtFQUE0RTtBQUM1RSx5RkFBc0Y7QUFDdEYsdUVBQXFFO0FBQ3JFLGtHQUErRjtBQUMvRixrR0FBK0Y7QUFlL0Y7SUFBQTtJQUF3QixDQUFDO0lBQVosU0FBUztRQWJyQixlQUFRLENBQUM7WUFDVCxZQUFZLEdBQUcsNEJBQVksU0FBSyxtQ0FBcUIsR0FBRSx1Q0FBaUIsRUFBRSw0QkFBWSxFQUFFLDZDQUFvQixFQUFFLDZDQUFvQixFQUFDO1lBQ25JLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFO2dCQUNSLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLG9CQUFNLENBQUM7YUFDeEM7WUFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxFQUFFLHVDQUFpQixDQUFDO1lBQzNDLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzNCLENBQUM7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZXN0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdGVzdC5zZXJ2aWNlJztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdzL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xuaW1wb3J0IHsgU2ltcGxlR2FtZVNlcnZpY2UgfSBmcm9tICcuL3ZpZXdzL3NpbXBsZS1nYW1lL3NpbXBsZS1nYW1lLnNlcnZpY2UnO1xuaW1wb3J0IHsgRG90SW5wdXRDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdzL3NpbXBsZS1nYW1lL2RvdC1pbnB1dC9kb3QtaW5wdXQuY29tcG9uZW50JztcbmltcG9ydCB7IERvdENvbXBvbmVudCB9IGZyb20gJy4vdmlld3Mvc2ltcGxlLWdhbWUvZG90L2RvdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sb3JQYWxsZXRDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdzL3NpbXBsZS1nYW1lL2NvbG9yLXBhbGxldC9jb2xvci1wYWxsZXQuY29tcG9uZW50JztcbmltcG9ydCB7IFVzZXJBbnN3ZXJzQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3cy9zaW1wbGUtZ2FtZS91c2VyLWFuc3dlcnMvdXNlci1hbnN3ZXJzLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG5cdGRlY2xhcmF0aW9uczogW0FwcENvbXBvbmVudCwgLi4ubmF2aWdhdGFibGVDb21wb25lbnRzLCBEb3RJbnB1dENvbXBvbmVudCwgRG90Q29tcG9uZW50LCBDb2xvclBhbGxldENvbXBvbmVudCwgVXNlckFuc3dlcnNDb21wb25lbnRdLFxuXHRib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuXHRpbXBvcnRzOiBbXG5cdFx0TmF0aXZlU2NyaXB0TW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG5cdFx0TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuXHRcdE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcblx0XSxcblx0cHJvdmlkZXJzOiBbVGVzdFNlcnZpY2UsIFNpbXBsZUdhbWVTZXJ2aWNlXSxcblx0c2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7fVxuIl19