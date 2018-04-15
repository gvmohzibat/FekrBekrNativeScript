"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var simple_game_service_1 = require("../simple-game.service");
var ColorPalletComponent = /** @class */ (function () {
    function ColorPalletComponent(sg) {
        this.sg = sg;
        this.colorWidth = this.sg.colorWidth;
        this.colors = this.sg.colors;
    }
    ColorPalletComponent = __decorate([
        core_1.Component({
            selector: 'color-pallet',
            moduleId: module.id,
            templateUrl: './color-pallet.component.html',
            styleUrls: ['./color-pallet.component.css']
        }),
        __metadata("design:paramtypes", [simple_game_service_1.SimpleGameService])
    ], ColorPalletComponent);
    return ColorPalletComponent;
}());
exports.ColorPalletComponent = ColorPalletComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGFsbGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbG9yLXBhbGxldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsOERBQTJEO0FBUTNEO0lBR0MsOEJBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBRnpDLGVBQVUsR0FBVyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUN4QyxXQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDb0IsQ0FBQztJQUhqQyxvQkFBb0I7UUFOaEMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzNDLENBQUM7eUNBSXVCLHVDQUFpQjtPQUg3QixvQkFBb0IsQ0FJaEM7SUFBRCwyQkFBQztDQUFBLEFBSkQsSUFJQztBQUpZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2ltcGxlR2FtZVNlcnZpY2UgfSBmcm9tICcuLi9zaW1wbGUtZ2FtZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnY29sb3ItcGFsbGV0Jyxcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6ICcuL2NvbG9yLXBhbGxldC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2NvbG9yLXBhbGxldC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29sb3JQYWxsZXRDb21wb25lbnQge1xuXHRjb2xvcldpZHRoOiBudW1iZXIgPSB0aGlzLnNnLmNvbG9yV2lkdGg7XG5cdGNvbG9ycyA9IHRoaXMuc2cuY29sb3JzO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNnOiBTaW1wbGVHYW1lU2VydmljZSkge31cbn1cbiJdfQ==