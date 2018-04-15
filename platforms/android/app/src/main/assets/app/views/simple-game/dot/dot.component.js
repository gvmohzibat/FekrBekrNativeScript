"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var simple_game_service_1 = require("../simple-game.service");
var DotComponent = /** @class */ (function () {
    function DotComponent(sg) {
        this.sg = sg;
        this.width = this.sg.width;
        this.Q_COLOR = this.sg.Q_COLOR;
        this.color = '#aaa';
        this.question = false;
        this.selected = false;
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DotComponent.prototype, "color", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQsOERBQTJEO0FBUTNEO0lBTUMsc0JBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBTHpDLFVBQUssR0FBVyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUM5QixZQUFPLEdBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDekIsVUFBSyxHQUFXLE1BQU0sQ0FBQztRQUN2QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFDUyxDQUFDO0lBSHBDO1FBQVIsWUFBSyxFQUFFOzsrQ0FBd0I7SUFDdkI7UUFBUixZQUFLLEVBQUU7O2tEQUEyQjtJQUMxQjtRQUFSLFlBQUssRUFBRTs7a0RBQTJCO0lBTHZCLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxLQUFLO1lBQ2YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQkFBc0I7WUFDbkMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDbEMsQ0FBQzt5Q0FPdUIsdUNBQWlCO09BTjdCLFlBQVksQ0FPeEI7SUFBRCxtQkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2ltcGxlR2FtZVNlcnZpY2UgfSBmcm9tICcuLi9zaW1wbGUtZ2FtZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZG90Jyxcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6ICcuL2RvdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2RvdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRG90Q29tcG9uZW50IHtcblx0d2lkdGg6IG51bWJlciA9IHRoaXMuc2cud2lkdGg7XG5cdFFfQ09MT1I6IHN0cmluZyA9IHRoaXMuc2cuUV9DT0xPUjtcblx0QElucHV0KCkgY29sb3I6IHN0cmluZyA9ICcjYWFhJztcblx0QElucHV0KCkgcXVlc3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcblx0QElucHV0KCkgc2VsZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZzogU2ltcGxlR2FtZVNlcnZpY2UpIHt9XG59XG4iXX0=