"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var simple_game_service_1 = require("../simple-game.service");
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(sg) {
        this.sg = sg;
        this.question = this.sg.question;
    }
    QuestionComponent = __decorate([
        core_1.Component({
            selector: 'question',
            moduleId: module.id,
            templateUrl: './question.component.html',
            styleUrls: ['./question.component.css']
        }),
        __metadata("design:paramtypes", [simple_game_service_1.SimpleGameService])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
