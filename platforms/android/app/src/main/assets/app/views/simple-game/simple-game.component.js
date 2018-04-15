"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var simple_game_service_1 = require("./simple-game.service");
var SimpleGameComponent = /** @class */ (function () {
    function SimpleGameComponent(router, sg) {
        this.router = router;
        this.sg = sg;
        this.dotsCount = this.sg.dotsCount;
    }
    SimpleGameComponent.prototype.submit = function () {
        alert('wef');
        this.router.navigate(['/list']);
    };
    SimpleGameComponent = __decorate([
        core_1.Component({
            selector: 'simple-game',
            moduleId: module.id,
            templateUrl: './simple-game.html',
            styleUrls: ['./simple-game.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, simple_game_service_1.SimpleGameService])
    ], SimpleGameComponent);
    return SimpleGameComponent;
}());
exports.SimpleGameComponent = SimpleGameComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWdhbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2ltcGxlLWdhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUF5QztBQUN6Qyw2REFBMEQ7QUFRMUQ7SUFFQyw2QkFBb0IsTUFBYyxFQUFVLEVBQXFCO1FBQTdDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQURqRSxjQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7SUFDc0MsQ0FBQztJQUNyRSxvQ0FBTSxHQUFOO1FBQ0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFOVyxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ2hDLENBQUM7eUNBRzJCLGVBQU0sRUFBYyx1Q0FBaUI7T0FGckQsbUJBQW1CLENBTy9CO0lBQUQsMEJBQUM7Q0FBQSxBQVBELElBT0M7QUFQWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTaW1wbGVHYW1lU2VydmljZSB9IGZyb20gJy4vc2ltcGxlLWdhbWUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3NpbXBsZS1nYW1lJyxcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0dGVtcGxhdGVVcmw6ICcuL3NpbXBsZS1nYW1lLmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9zaW1wbGUtZ2FtZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVHYW1lQ29tcG9uZW50IHtcblx0ZG90c0NvdW50ID0gdGhpcy5zZy5kb3RzQ291bnQ7XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgc2c6IFNpbXBsZUdhbWVTZXJ2aWNlKSB7fVxuXHRzdWJtaXQoKSB7XG5cdFx0YWxlcnQoJ3dlZicpO1xuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xpc3QnXSk7XG5cdH1cbn1cbiJdfQ==