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
    DotInputComponent.prototype.inputSelect = function (i) {
        this.sg.activeInputIndex = i;
    };
    DotInputComponent.prototype.submit = function () {
        this.sg.submitInput();
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90LWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRvdC1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsOERBQTJEO0FBUTNEO0lBR0MsMkJBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBRnpDLFVBQUssR0FBVSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUMvQixjQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFDYyxDQUFDO0lBQzdDLHVDQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1osSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFUUSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsNEJBQTRCO1lBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3hDLENBQUM7eUNBSXVCLHVDQUFpQjtPQUg3QixpQkFBaUIsQ0FVN0I7SUFBRCx3QkFBQztDQUFBLEFBVkQsSUFVQztBQVZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2ltcGxlR2FtZVNlcnZpY2UgfSBmcm9tICcuLi9zaW1wbGUtZ2FtZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZG90LWlucHV0Jyxcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6ICcuL2RvdC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2RvdC1pbnB1dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRG90SW5wdXRDb21wb25lbnQge1xuXHRpbnB1dDogYW55W10gPSB0aGlzLnNnLmN1cnJlbnQ7XG5cdGRvdHNDb3VudCA9IHRoaXMuc2cuZG90c0NvdW50O1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNnOiBTaW1wbGVHYW1lU2VydmljZSkge31cblx0aW5wdXRTZWxlY3QoaSkge1xuXHRcdHRoaXMuc2cuYWN0aXZlSW5wdXRJbmRleCA9IGk7XG4gICAgfVxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5zZy5zdWJtaXRJbnB1dCgpO1xuICAgIH1cbn1cbiJdfQ==