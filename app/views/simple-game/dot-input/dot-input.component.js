"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var simple_game_service_1 = require("../simple-game.service");
var DotInputComponent = /** @class */ (function () {
    function DotInputComponent(sg) {
        this.sg = sg;
        this.input = this.sg.current;
        this.dotsCount = this.sg.dotsCount;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90LWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRvdC1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsOERBQTJEO0FBUTNEO0lBR0MsMkJBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBRnRDLFVBQUssR0FBVSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxjQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFDYyxDQUFDO0lBSGpDLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDeEMsQ0FBQzt5Q0FJdUIsdUNBQWlCO09BSDdCLGlCQUFpQixDQUk3QjtJQUFELHdCQUFDO0NBQUEsQUFKRCxJQUlDO0FBSlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaW1wbGVHYW1lU2VydmljZSB9IGZyb20gJy4uL3NpbXBsZS1nYW1lLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkb3QtaW5wdXQnLFxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHR0ZW1wbGF0ZVVybDogJy4vZG90LWlucHV0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vZG90LWlucHV0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEb3RJbnB1dENvbXBvbmVudCB7XG4gICAgaW5wdXQ6IGFueVtdID0gdGhpcy5zZy5jdXJyZW50O1xuXHRkb3RzQ291bnQgPSB0aGlzLnNnLmRvdHNDb3VudDtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZzogU2ltcGxlR2FtZVNlcnZpY2UpIHt9XG59XG4iXX0=