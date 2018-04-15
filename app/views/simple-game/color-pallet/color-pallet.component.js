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
    ColorPalletComponent.prototype.selectPallet = function (c) {
        this.sg.setInputColor(c.color);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3ItcGFsbGV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbG9yLXBhbGxldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsOERBQTJEO0FBUTNEO0lBR0MsOEJBQW9CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBRnpDLGVBQVUsR0FBVyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUN4QyxXQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDb0IsQ0FBQztJQUM3QywyQ0FBWSxHQUFaLFVBQWEsQ0FBQztRQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBTlcsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUMzQyxDQUFDO3lDQUl1Qix1Q0FBaUI7T0FIN0Isb0JBQW9CLENBT2hDO0lBQUQsMkJBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpbXBsZUdhbWVTZXJ2aWNlIH0gZnJvbSAnLi4vc2ltcGxlLWdhbWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2NvbG9yLXBhbGxldCcsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiAnLi9jb2xvci1wYWxsZXQuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9jb2xvci1wYWxsZXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvbG9yUGFsbGV0Q29tcG9uZW50IHtcblx0Y29sb3JXaWR0aDogbnVtYmVyID0gdGhpcy5zZy5jb2xvcldpZHRoO1xuXHRjb2xvcnMgPSB0aGlzLnNnLmNvbG9ycztcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZzogU2ltcGxlR2FtZVNlcnZpY2UpIHt9XG5cdHNlbGVjdFBhbGxldChjKSB7XG5cdFx0dGhpcy5zZy5zZXRJbnB1dENvbG9yKGMuY29sb3IpO1xuXHR9XG59XG4iXX0=