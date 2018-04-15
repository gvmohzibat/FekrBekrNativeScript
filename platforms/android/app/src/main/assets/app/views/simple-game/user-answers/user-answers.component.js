"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var simple_game_service_1 = require("../simple-game.service");
var UserAnswersComponent = /** @class */ (function () {
    function UserAnswersComponent(sg) {
        this.sg = sg;
        this.answers = this.sg.userAnswers;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hbnN3ZXJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXItYW5zd2Vycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsOERBQTJEO0FBUTNEO0lBRUMsOEJBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBRHpDLFlBQU8sR0FBVSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztJQUNPLENBQUM7SUFGakMsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUMzQyxDQUFDO3lDQUd1Qix1Q0FBaUI7T0FGN0Isb0JBQW9CLENBR2hDO0lBQUQsMkJBQUM7Q0FBQSxBQUhELElBR0M7QUFIWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpbXBsZUdhbWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2ltcGxlLWdhbWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3VzZXItYW5zd2VycycsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiAnLi91c2VyLWFuc3dlcnMuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi91c2VyLWFuc3dlcnMuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJBbnN3ZXJzQ29tcG9uZW50IHtcblx0YW5zd2VyczogYW55W10gPSB0aGlzLnNnLnVzZXJBbnN3ZXJzO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNnOiBTaW1wbGVHYW1lU2VydmljZSkge31cbn1cbiJdfQ==