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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlc3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVlc3Rpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDhEQUEyRDtBQVEzRDtJQUVDLDJCQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUR6QyxhQUFRLEdBQVEsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7SUFDVyxDQUFDO0lBRmpDLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDdkMsQ0FBQzt5Q0FHdUIsdUNBQWlCO09BRjdCLGlCQUFpQixDQUc3QjtJQUFELHdCQUFDO0NBQUEsQUFIRCxJQUdDO0FBSFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaW1wbGVHYW1lU2VydmljZSB9IGZyb20gJy4uL3NpbXBsZS1nYW1lLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdxdWVzdGlvbicsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiAnLi9xdWVzdGlvbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3F1ZXN0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBRdWVzdGlvbkNvbXBvbmVudCB7XG5cdHF1ZXN0aW9uOiBhbnkgPSB0aGlzLnNnLnF1ZXN0aW9uO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNnOiBTaW1wbGVHYW1lU2VydmljZSkge31cbn1cbiJdfQ==