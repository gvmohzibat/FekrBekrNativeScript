"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var simple_game_service_1 = require("./simple-game.service");
var page_1 = require("ui/page");
var SimpleGameComponent = /** @class */ (function () {
    function SimpleGameComponent(sg, page) {
        var _this = this;
        this.sg = sg;
        this.page = page;
        this.dotsCount = this.sg.dotsCount;
        this.sg.$newAnswerAdded.subscribe(function (result) { return _this.scrollUserAnswersViewToBottom(); });
    }
    SimpleGameComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    SimpleGameComponent.prototype.scrollUserAnswersViewToBottom = function () {
        // console.log('w');
        var userAnswersScrollView = this.page.getViewById('user-answers-scrollView');
        // console.log(userAnswersScrollView.scrollableHeight);
        setTimeout(function () {
            userAnswersScrollView.scrollToVerticalOffset(userAnswersScrollView.scrollableHeight, false);
        }, 20);
    };
    SimpleGameComponent = __decorate([
        core_1.Component({
            selector: 'simple-game',
            moduleId: module.id,
            templateUrl: './simple-game.html',
            styleUrls: ['./simple-game.css']
        }),
        __metadata("design:paramtypes", [simple_game_service_1.SimpleGameService, page_1.Page])
    ], SimpleGameComponent);
    return SimpleGameComponent;
}());
exports.SimpleGameComponent = SimpleGameComponent;
