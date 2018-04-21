"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var simple_game_service_1 = require("../simple-game.service");
var DotInputComponent = /** @class */ (function () {
    function DotInputComponent(sg) {
        var _this = this;
        this.sg = sg;
        this.input = this.sg.current;
        this.dotsCount = this.sg.dotsCount;
        this.inputEnabled = true;
        this.sg.$gameFinished.subscribe(function (result) { return _this.gameFinished(result); });
    }
    DotInputComponent.prototype.inputSelect = function (i) {
        this.sg.activeInputIndex = i;
    };
    DotInputComponent.prototype.submit = function () {
        this.sg.submitInput();
    };
    DotInputComponent.prototype.gameFinished = function (data) {
        this.inputEnabled = !data.disableInput;
    };
    DotInputComponent = __decorate([
        core_1.Component({
            selector: 'dot-input',
            moduleId: module.id,
            templateUrl: './dot-input.component.html',
            styleUrls: ['./dot-input.component.css']
        }),
        __metadata("design:paramtypes", [simple_game_service_1.SimpleGameService])
    ], DotInputComponent);
    return DotInputComponent;
}());
exports.DotInputComponent = DotInputComponent;
