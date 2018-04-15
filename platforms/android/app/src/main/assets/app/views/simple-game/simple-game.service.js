"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SimpleGameService = /** @class */ (function () {
    function SimpleGameService() {
        this.emptyDot = { color: NO_COLOR };
        this.Q_COLOR = '#666';
        this.dotsCount = 4;
        this.current = [];
        this.width = 45;
        this.colorWidth = 35;
        this.colors = [
            { color: '#f00' },
            { color: '#f90' },
            { color: '#ff0' },
            { color: '#9f0' },
            { color: '#0f0' },
            { color: '#0f9' },
            { color: '#0ff' }
        ];
        this.question = { dots: [] };
        // userAnswers
        this._userAnswers = [];
        // activeInputIndex
        this._activeInputIndex = 0;
        for (var i = 0; i < this.dotsCount; i++) {
            this.current.push(Object.assign({}, this.emptyDot));
            this.question.dots.push(Object.assign({}, this.colors[getRandomInt(this.dotsCount)]));
        }
        this.width = 45;
        this.colorWidth = 35;
    }
    Object.defineProperty(SimpleGameService.prototype, "userAnswers", {
        get: function () {
            return this._userAnswers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleGameService.prototype, "activeInputIndex", {
        get: function () {
            return this._activeInputIndex;
        },
        set: function (i) {
            if (i < this.dotsCount)
                this._activeInputIndex = i;
        },
        enumerable: true,
        configurable: true
    });
    SimpleGameService.prototype.setInputColor = function (color) {
        this.current[this.activeInputIndex].color = color;
    };
    SimpleGameService.prototype.submitInput = function () {
        this.userAnswers.push({ dots: this.current.map(function (x) { return Object.assign({}, x); }) });
    };
    SimpleGameService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SimpleGameService);
    return SimpleGameService;
}());
exports.SimpleGameService = SimpleGameService;
var NO_COLOR = '#ccc';
var getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWdhbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbXBsZS1nYW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0M7SUFpQ0M7UUFoQ1EsYUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLFlBQU8sR0FBRyxNQUFNLENBQUM7UUFDakIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixXQUFNLEdBQUc7WUFDUixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7WUFDakIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQ2pCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtZQUNqQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7WUFDakIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQ2pCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtZQUNqQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7U0FDakIsQ0FBQztRQUNGLGFBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUV4QixjQUFjO1FBQ04saUJBQVksR0FBRyxFQUFFLENBQUM7UUFLMUIsbUJBQW1CO1FBQ1gsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBUzdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkYsQ0FBQztRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFwQkQsc0JBQUksMENBQVc7YUFBZjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBSUQsc0JBQUksK0NBQWdCO2FBR3BCO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUMvQixDQUFDO2FBTEQsVUFBcUIsQ0FBQztZQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELENBQUM7OztPQUFBO0lBY0QseUNBQWEsR0FBYixVQUFjLEtBQUs7UUFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ25ELENBQUM7SUFDRCx1Q0FBVyxHQUFYO1FBQ0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBL0NXLGlCQUFpQjtRQUQ3QixpQkFBVSxFQUFFOztPQUNBLGlCQUFpQixDQWdEN0I7SUFBRCx3QkFBQztDQUFBLEFBaERELElBZ0RDO0FBaERZLDhDQUFpQjtBQWtEOUIsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDO0FBQ3hCLElBQU0sWUFBWSxHQUFHLFVBQUEsR0FBRztJQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpbXBsZUdhbWVTZXJ2aWNlIHtcblx0cHJpdmF0ZSBlbXB0eURvdCA9IHsgY29sb3I6IE5PX0NPTE9SIH07XG5cdFFfQ09MT1IgPSAnIzY2Nic7XG5cdGRvdHNDb3VudCA9IDQ7XG5cdGN1cnJlbnQgPSBbXTtcblx0d2lkdGggPSA0NTtcblx0Y29sb3JXaWR0aCA9IDM1O1xuXHRjb2xvcnMgPSBbXG5cdFx0eyBjb2xvcjogJyNmMDAnIH0sXG5cdFx0eyBjb2xvcjogJyNmOTAnIH0sXG5cdFx0eyBjb2xvcjogJyNmZjAnIH0sXG5cdFx0eyBjb2xvcjogJyM5ZjAnIH0sXG5cdFx0eyBjb2xvcjogJyMwZjAnIH0sXG5cdFx0eyBjb2xvcjogJyMwZjknIH0sXG5cdFx0eyBjb2xvcjogJyMwZmYnIH1cblx0XTtcblx0cXVlc3Rpb24gPSB7IGRvdHM6IFtdIH07XG5cblx0Ly8gdXNlckFuc3dlcnNcblx0cHJpdmF0ZSBfdXNlckFuc3dlcnMgPSBbXTtcblx0Z2V0IHVzZXJBbnN3ZXJzKCkge1xuXHRcdHJldHVybiB0aGlzLl91c2VyQW5zd2Vycztcblx0fVxuXG5cdC8vIGFjdGl2ZUlucHV0SW5kZXhcblx0cHJpdmF0ZSBfYWN0aXZlSW5wdXRJbmRleCA9IDA7XG5cdHNldCBhY3RpdmVJbnB1dEluZGV4KGkpIHtcblx0XHRpZiAoaSA8IHRoaXMuZG90c0NvdW50KSB0aGlzLl9hY3RpdmVJbnB1dEluZGV4ID0gaTtcblx0fVxuXHRnZXQgYWN0aXZlSW5wdXRJbmRleCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fYWN0aXZlSW5wdXRJbmRleDtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb3RzQ291bnQ7IGkrKykge1xuXHRcdFx0dGhpcy5jdXJyZW50LnB1c2goT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5lbXB0eURvdCkpO1xuXHRcdFx0dGhpcy5xdWVzdGlvbi5kb3RzLnB1c2goT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb2xvcnNbZ2V0UmFuZG9tSW50KHRoaXMuZG90c0NvdW50KV0pKTtcblx0XHR9XG5cdFx0dGhpcy53aWR0aCA9IDQ1O1xuXHRcdHRoaXMuY29sb3JXaWR0aCA9IDM1O1xuXHR9XG5cblx0c2V0SW5wdXRDb2xvcihjb2xvcikge1xuXHRcdHRoaXMuY3VycmVudFt0aGlzLmFjdGl2ZUlucHV0SW5kZXhdLmNvbG9yID0gY29sb3I7XG5cdH1cblx0c3VibWl0SW5wdXQoKSB7XG5cdFx0dGhpcy51c2VyQW5zd2Vycy5wdXNoKHsgZG90czogdGhpcy5jdXJyZW50Lm1hcCh4ID0+IE9iamVjdC5hc3NpZ24oe30sIHgpKSB9KTtcblx0fVxufVxuXG5jb25zdCBOT19DT0xPUiA9ICcjY2NjJztcbmNvbnN0IGdldFJhbmRvbUludCA9IG1heCA9PiB7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG1heCkpO1xufTtcbiJdfQ==