"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var simple_game_service_1 = require("../simple-game.service");
var UserAnswersComponent = /** @class */ (function () {
    function UserAnswersComponent(sg) {
        this.sg = sg;
        this.answers = this.sg.userAnswers;
        this.rowHeight = this.sg.width;
        this.rowPadding = 5;
    }
    UserAnswersComponent = __decorate([
        core_1.Component({
            selector: 'user-answers',
            moduleId: module.id,
            templateUrl: './user-answers.component.html',
            styleUrls: ['./user-answers.component.css']
        }),
        __metadata("design:paramtypes", [simple_game_service_1.SimpleGameService])
    ], UserAnswersComponent);
    return UserAnswersComponent;
}());
exports.UserAnswersComponent = UserAnswersComponent;
