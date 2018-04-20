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
        this.sg.newAnswerAdded.subscribe(function (result) { return _this.scrollUserAnswersViewToBottom(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWdhbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2ltcGxlLWdhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDZEQUEwRDtBQUMxRCxnQ0FBK0I7QUFRL0I7SUFFQyw2QkFBb0IsRUFBcUIsRUFBVSxJQUFVO1FBQTdELGlCQUVDO1FBRm1CLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUQ3RCxjQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7UUFFN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLDZCQUE2QixFQUFFLEVBQXBDLENBQW9DLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBQ0Qsc0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBQ0QsMkRBQTZCLEdBQTdCO1FBQ0Msb0JBQW9CO1FBQ3BCLElBQUkscUJBQXFCLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNsRix1REFBdUQ7UUFDdkQsVUFBVSxDQUFDO1lBQ1YscUJBQXFCLENBQUMsc0JBQXNCLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQWZXLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxvQkFBb0I7WUFDakMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDaEMsQ0FBQzt5Q0FHdUIsdUNBQWlCLEVBQWdCLFdBQUk7T0FGakQsbUJBQW1CLENBZ0IvQjtJQUFELDBCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaW1wbGVHYW1lU2VydmljZSB9IGZyb20gJy4vc2ltcGxlLWdhbWUuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3NpbXBsZS1nYW1lJyxcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6ICcuL3NpbXBsZS1nYW1lLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zaW1wbGUtZ2FtZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVHYW1lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0ZG90c0NvdW50ID0gdGhpcy5zZy5kb3RzQ291bnQ7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2c6IFNpbXBsZUdhbWVTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcblx0XHR0aGlzLnNnLm5ld0Fuc3dlckFkZGVkLnN1YnNjcmliZShyZXN1bHQgPT4gdGhpcy5zY3JvbGxVc2VyQW5zd2Vyc1ZpZXdUb0JvdHRvbSgpKTtcblx0fVxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcblx0fVxuXHRzY3JvbGxVc2VyQW5zd2Vyc1ZpZXdUb0JvdHRvbSgpIHtcblx0XHQvLyBjb25zb2xlLmxvZygndycpO1xuXHRcdGxldCB1c2VyQW5zd2Vyc1Njcm9sbFZpZXc6IGFueSA9IHRoaXMucGFnZS5nZXRWaWV3QnlJZCgndXNlci1hbnN3ZXJzLXNjcm9sbFZpZXcnKTtcblx0XHQvLyBjb25zb2xlLmxvZyh1c2VyQW5zd2Vyc1Njcm9sbFZpZXcuc2Nyb2xsYWJsZUhlaWdodCk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR1c2VyQW5zd2Vyc1Njcm9sbFZpZXcuc2Nyb2xsVG9WZXJ0aWNhbE9mZnNldCh1c2VyQW5zd2Vyc1Njcm9sbFZpZXcuc2Nyb2xsYWJsZUhlaWdodCwgZmFsc2UpO1xuXHRcdH0sIDIwKTtcblx0fVxufVxuIl19