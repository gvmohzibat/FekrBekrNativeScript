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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hbnN3ZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXItYW5zd2Vycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsOERBQTJEO0FBUTNEO0lBSUMsOEJBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBSHpDLFlBQU8sR0FBVSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztRQUNyQyxjQUFTLEdBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7UUFDbEMsZUFBVSxHQUFXLENBQUMsQ0FBQztJQUNxQixDQUFDO0lBSmpDLG9CQUFvQjtRQU5oQyxnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDM0MsQ0FBQzt5Q0FLdUIsdUNBQWlCO09BSjdCLG9CQUFvQixDQUtoQztJQUFELDJCQUFDO0NBQUEsQUFMRCxJQUtDO0FBTFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaW1wbGVHYW1lU2VydmljZSB9IGZyb20gJy4uL3NpbXBsZS1nYW1lLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd1c2VyLWFuc3dlcnMnLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogJy4vdXNlci1hbnN3ZXJzLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vdXNlci1hbnN3ZXJzLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQW5zd2Vyc0NvbXBvbmVudCB7XG5cdGFuc3dlcnM6IGFueVtdID0gdGhpcy5zZy51c2VyQW5zd2Vycztcblx0cm93SGVpZ2h0OiBudW1iZXIgPSB0aGlzLnNnLndpZHRoO1xuXHRyb3dQYWRkaW5nOiBudW1iZXIgPSA1O1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNnOiBTaW1wbGVHYW1lU2VydmljZSkge31cbn1cbiJdfQ==