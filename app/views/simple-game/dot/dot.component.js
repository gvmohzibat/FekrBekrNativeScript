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
        this.sg.revealQuestionEvent.subscribe(function (result) { return _this.revealQuestionChange(result); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQsOERBQTJEO0FBUTNEO0lBT0Msc0JBQW9CLEVBQXFCO1FBQXpDLGlCQUVDO1FBRm1CLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBTnpDLFVBQUssR0FBVyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUM5QixZQUFPLEdBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDekIsUUFBRyxHQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBR2xDLElBQUksQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUNELDJDQUFvQixHQUFwQixVQUFxQixJQUFJO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFUUTtRQUFSLFlBQUssRUFBRTs7NkNBQXdDO0lBQ3ZDO1FBQVIsWUFBSyxFQUFFOztrREFBMkI7SUFDMUI7UUFBUixZQUFLLEVBQUU7O2tEQUEyQjtJQUx2QixZQUFZO1FBTnhCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsS0FBSztZQUNmLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ2xDLENBQUM7eUNBUXVCLHVDQUFpQjtPQVA3QixZQUFZLENBYXhCO0lBQUQsbUJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpbXBsZUdhbWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2ltcGxlLWdhbWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RvdCcsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiAnLi9kb3QuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9kb3QuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIERvdENvbXBvbmVudCB7XG5cdHdpZHRoOiBudW1iZXIgPSB0aGlzLnNnLndpZHRoO1xuXHRRX0NPTE9SOiBzdHJpbmcgPSB0aGlzLnNnLlFfQ09MT1I7XG5cdEBJbnB1dCgpIGRvdDogYW55ID0geyBjb2xvcjogdGhpcy5zZy5OT19DT0xPUiB9O1xuXHRASW5wdXQoKSBxdWVzdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXHRASW5wdXQoKSBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc2c6IFNpbXBsZUdhbWVTZXJ2aWNlKSB7XG5cdFx0dGhpcy5zZy5yZXZlYWxRdWVzdGlvbkV2ZW50LnN1YnNjcmliZShyZXN1bHQgPT4gdGhpcy5yZXZlYWxRdWVzdGlvbkNoYW5nZShyZXN1bHQpKTtcblx0fVxuXHRyZXZlYWxRdWVzdGlvbkNoYW5nZShkYXRhKSB7XG5cdFx0dGhpcy5xdWVzdGlvbiA9ICFkYXRhLnJldmVhbDtcblx0fVxufVxuIl19