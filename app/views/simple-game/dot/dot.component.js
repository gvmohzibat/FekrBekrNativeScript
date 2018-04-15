"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var simple_game_service_1 = require("../simple-game.service");
var DotComponent = /** @class */ (function () {
    function DotComponent(sg) {
        this.sg = sg;
        this.width = this.sg.width;
        this.color = '#aaa';
    }
    DotComponent.prototype.test = function () {
        this.color = '#aaa';
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DotComponent.prototype, "color", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRvdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUQ7QUFDakQsOERBQTJEO0FBUTNEO0lBR0Msc0JBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBRnpDLFVBQUssR0FBVyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztRQUNyQixVQUFLLEdBQVcsTUFBTSxDQUFDO0lBQ1ksQ0FBQztJQUM3QywyQkFBSSxHQUFKO1FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUpRO1FBQVIsWUFBSyxFQUFFOzsrQ0FBd0I7SUFGcEIsWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNsQyxDQUFDO3lDQUl1Qix1Q0FBaUI7T0FIN0IsWUFBWSxDQU94QjtJQUFELG1CQUFDO0NBQUEsQUFQRCxJQU9DO0FBUFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaW1wbGVHYW1lU2VydmljZSB9IGZyb20gJy4uL3NpbXBsZS1nYW1lLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkb3QnLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogJy4vZG90LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vZG90LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEb3RDb21wb25lbnQge1xuXHR3aWR0aDogbnVtYmVyID0gdGhpcy5zZy53aWR0aDtcblx0QElucHV0KCkgY29sb3I6IHN0cmluZyA9ICcjYWFhJztcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZzogU2ltcGxlR2FtZVNlcnZpY2UpIHt9XG5cdHRlc3QoKSB7XG5cdFx0dGhpcy5jb2xvciA9ICcjYWFhJztcblx0fVxufVxuIl19