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
