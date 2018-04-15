"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SimpleGameService = /** @class */ (function () {
    function SimpleGameService() {
        this.dotsCount = 4;
        this.colors = [
            { color: '#f00' },
            { color: '#f90' },
            { color: '#ff0' },
            { color: '#9f0' },
            { color: '#0f0' },
            { color: '#0f9' },
            { color: '#0ff' }
        ];
    }
    Object.defineProperty(SimpleGameService.prototype, "width", {
        get: function () {
            return 50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleGameService.prototype, "colorWidth", {
        get: function () {
            return 35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleGameService.prototype, "userAnswers", {
        get: function () {
            return [
                { dots: [{ color: '#f00' }, { color: '#f00' }, { color: '#f00' }, { color: '#f00' }] },
                { dots: [{ color: '#f90' }, { color: '#f90' }, { color: '#f90' }, { color: '#f00' }] }
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleGameService.prototype, "current", {
        get: function () {
            return [{ color: '#f00' }, { color: '#f90' }, { color: '#ff0' }, { color: '#9f0' }];
        },
        enumerable: true,
        configurable: true
    });
    SimpleGameService = __decorate([
        core_1.Injectable()
    ], SimpleGameService);
    return SimpleGameService;
}());
exports.SimpleGameService = SimpleGameService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWdhbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbXBsZS1nYW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0M7SUFEQTtRQUVDLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFPZCxXQUFNLEdBQUc7WUFDUixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7WUFDakIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQ2pCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtZQUNqQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7WUFDakIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQ2pCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtZQUNqQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7U0FDakIsQ0FBQztJQVdILENBQUM7SUF6QkEsc0JBQUksb0NBQUs7YUFBVDtZQUNDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDWCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHlDQUFVO2FBQWQ7WUFDQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ1gsQ0FBQzs7O09BQUE7SUFXRCxzQkFBSSwwQ0FBVzthQUFmO1lBQ0MsTUFBTSxDQUFDO2dCQUNOLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTtnQkFDdEYsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO2FBQ3RGLENBQUM7UUFDSCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHNDQUFPO2FBQVg7WUFDQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7OztPQUFBO0lBMUJXLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFO09BQ0EsaUJBQWlCLENBMkI3QjtJQUFELHdCQUFDO0NBQUEsQUEzQkQsSUEyQkM7QUEzQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2ltcGxlR2FtZVNlcnZpY2Uge1xuXHRkb3RzQ291bnQgPSA0O1xuXHRnZXQgd2lkdGgoKSB7XG5cdFx0cmV0dXJuIDUwO1xuXHR9XG5cdGdldCBjb2xvcldpZHRoKCkge1xuXHRcdHJldHVybiAzNTtcblx0fVxuXHRjb2xvcnMgPSBbXG5cdFx0eyBjb2xvcjogJyNmMDAnIH0sXG5cdFx0eyBjb2xvcjogJyNmOTAnIH0sXG5cdFx0eyBjb2xvcjogJyNmZjAnIH0sXG5cdFx0eyBjb2xvcjogJyM5ZjAnIH0sXG5cdFx0eyBjb2xvcjogJyMwZjAnIH0sXG5cdFx0eyBjb2xvcjogJyMwZjknIH0sXG5cdFx0eyBjb2xvcjogJyMwZmYnIH1cblx0XTtcblxuXHRnZXQgdXNlckFuc3dlcnMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdHsgZG90czogW3sgY29sb3I6ICcjZjAwJyB9LCB7IGNvbG9yOiAnI2YwMCcgfSwgeyBjb2xvcjogJyNmMDAnIH0sIHsgY29sb3I6ICcjZjAwJyB9XSB9LFxuXHRcdFx0eyBkb3RzOiBbeyBjb2xvcjogJyNmOTAnIH0sIHsgY29sb3I6ICcjZjkwJyB9LCB7IGNvbG9yOiAnI2Y5MCcgfSwgeyBjb2xvcjogJyNmMDAnIH1dIH1cblx0XHRdO1xuXHR9XG5cdGdldCBjdXJyZW50KCkge1xuXHRcdHJldHVybiBbeyBjb2xvcjogJyNmMDAnIH0sIHsgY29sb3I6ICcjZjkwJyB9LCB7IGNvbG9yOiAnI2ZmMCcgfSwgeyBjb2xvcjogJyM5ZjAnIH1dO1xuXHR9XG59XG4iXX0=