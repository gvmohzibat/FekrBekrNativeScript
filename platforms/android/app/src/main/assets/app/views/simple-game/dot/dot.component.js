"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var simple_game_service_1 = require("../simple-game.service");
var DotComponent = /** @class */ (function () {
    function DotComponent(sg) {
        var _this = this;
        this.sg = sg;
        this.width = this.sg.width;
        this.Q_COLOR = this.sg.Q_COLOR;
        this.dot = { color: this.sg.NO_COLOR };
        this.question = false;
        this.selected = false;
        this.sg.$gameFinished.subscribe(function (result) { return _this.revealQuestionChange(result); });
    }
    DotComponent.prototype.revealQuestionChange = function (data) {
        this.question = !data.reveal;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DotComponent.prototype, "dot", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DotComponent.prototype, "question", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DotComponent.prototype, "selected", void 0);
    DotComponent = __decorate([
        core_1.Component({
            selector: 'dot',
            moduleId: module.id,
            templateUrl: './dot.component.html',
            styleUrls: ['./dot.component.css']
        }),
        __metadata("design:paramtypes", [simple_game_service_1.SimpleGameService])
    ], DotComponent);
    return DotComponent;
}());
exports.DotComponent = DotComponent;
