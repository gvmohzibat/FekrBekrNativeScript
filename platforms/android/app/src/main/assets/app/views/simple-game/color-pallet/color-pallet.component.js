"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var simple_game_service_1 = require("../simple-game.service");
var ColorPalletComponent = /** @class */ (function () {
    function ColorPalletComponent(sg) {
        var _this = this;
        this.sg = sg;
        this.colorWidth = this.sg.colorWidth;
        this.colors = this.sg.colors;
        this.palletEnabled = true;
        this.sg.$gameFinished.subscribe(function (result) { return _this.gameFinished(result); });
    }
    ColorPalletComponent.prototype.selectPallet = function (c) {
        this.sg.setInputColor(c.color);
    };
    ColorPalletComponent.prototype.gameFinished = function (data) {
        this.palletEnabled = !data.disablePallet;
    };
    ColorPalletComponent = __decorate([
        core_1.Component({
            selector: 'color-pallet',
            moduleId: module.id,
            templateUrl: './color-pallet.component.html',
            styleUrls: ['./color-pallet.component.css']
        }),
        __metadata("design:paramtypes", [simple_game_service_1.SimpleGameService])
    ], ColorPalletComponent);
    return ColorPalletComponent;
}());
exports.ColorPalletComponent = ColorPalletComponent;
