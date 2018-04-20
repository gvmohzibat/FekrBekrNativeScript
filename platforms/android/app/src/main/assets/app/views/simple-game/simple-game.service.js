"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SimpleGameService = /** @class */ (function () {
    function SimpleGameService() {
        this.Q_COLOR = '#666';
        this.NO_COLOR = '#aaa';
        this.emptyDot = { color: this.NO_COLOR };
        this.dotsCount = 5;
        this.current = [];
        this.width = 45;
        this.colorWidth = 35;
        this.colors = [
            { color: '#f00' },
            { color: '#f90' },
            { color: '#aa0' },
            { color: '#9f0' },
            { color: '#0f0' },
            { color: '#0fd' },
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
        this.colorWidth = 40;
        this.revealQuestionEvent = new core_1.EventEmitter();
        this.newAnswerAdded = new core_1.EventEmitter();
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
            else
                this._activeInputIndex = this._activeInputIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleGameService.prototype, "revealQuestion", {
        set: function (current) {
            this.revealQuestionEvent.emit({ reveal: true });
        },
        enumerable: true,
        configurable: true
    });
    SimpleGameService.prototype.emitUserAnswerAdded = function () {
        this.newAnswerAdded.emit({});
    };
    SimpleGameService.prototype.setInputColor = function (color) {
        this.current[this.activeInputIndex].color = color;
        this.activeInputIndex += 1;
    };
    SimpleGameService.prototype.submitInput = function () {
        // check input
        var answer = this.current.map(function (x) { return Object.assign({}, x); });
        var question = this.question.dots.map(function (x) { return Object.assign({}, x); });
        var hasResult = function (dot) { return dot.correct || dot.place; };
        var correctAnswer = true;
        question.forEach(function (Qdot, i) {
            if (Qdot.color === answer[i].color) {
                answer[i].correct = true;
                Qdot.correct = true;
            }
            else {
                correctAnswer = false;
            }
        });
        if (!correctAnswer) {
            question.forEach(function (Qdot, i) {
                if (!hasResult(Qdot)) {
                    answer.some(function (Adot) {
                        if (Adot.color == Qdot.color && !hasResult(Adot)) {
                            Qdot.place = true;
                            Adot.place = true;
                            correctAnswer = false;
                            return true;
                        }
                    });
                }
            });
        }
        else {
            this.revealQuestion = true;
        }
        this.userAnswers.push({ dots: answer });
        this.emitUserAnswerAdded();
    };
    SimpleGameService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SimpleGameService);
    return SimpleGameService;
}());
exports.SimpleGameService = SimpleGameService;
var getRandomInt = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlLWdhbWUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpbXBsZS1nYW1lLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFHekQ7SUErQ0M7UUE5Q0EsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQUNqQixhQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ1YsYUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QyxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLFdBQU0sR0FBRztZQUNSLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtZQUNqQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7WUFDakIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQ2pCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtZQUNqQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7WUFDakIsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1lBQ2pCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtTQUNqQixDQUFDO1FBQ0YsYUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBRXhCLGNBQWM7UUFDTixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUsxQixtQkFBbUI7UUFDWCxzQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFzQjdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkYsQ0FBQztRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUNuRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO0lBQy9DLENBQUM7SUFuQ0Qsc0JBQUksMENBQVc7YUFBZjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBSUQsc0JBQUksK0NBQWdCO2FBSXBCO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUMvQixDQUFDO2FBTkQsVUFBcUIsQ0FBQztZQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztnQkFBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1lBQ25ELElBQUk7Z0JBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUN0RCxDQUFDOzs7T0FBQTtJQU9ELHNCQUFJLDZDQUFjO2FBQWxCLFVBQW1CLE9BQU87WUFDekIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ2pELENBQUM7OztPQUFBO0lBSUQsK0NBQW1CLEdBQW5CO1FBQ0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQWFELHlDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsRCxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCx1Q0FBVyxHQUFYO1FBQ0MsY0FBYztRQUNkLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQztRQUN6RCxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1FBQ25FLElBQU0sU0FBUyxHQUFHLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsS0FBSyxFQUF4QixDQUF3QixDQUFDO1FBQ2xELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztRQUN6QixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNwQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUk7d0JBQ2YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7NEJBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOzRCQUNsQixhQUFhLEdBQUcsS0FBSyxDQUFDOzRCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUNiLENBQUM7b0JBQ0YsQ0FBQyxDQUFDLENBQUM7Z0JBQ0osQ0FBQztZQUNGLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDNUIsQ0FBQztRQUVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQS9GVyxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTs7T0FDQSxpQkFBaUIsQ0FnRzdCO0lBQUQsd0JBQUM7Q0FBQSxBQWhHRCxJQWdHQztBQWhHWSw4Q0FBaUI7QUFrRzlCLElBQU0sWUFBWSxHQUFHLFVBQUEsR0FBRztJQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2ltcGxlR2FtZVNlcnZpY2Uge1xuXHRRX0NPTE9SID0gJyM2NjYnO1xuXHROT19DT0xPUiA9ICcjYWFhJztcblx0cHJpdmF0ZSBlbXB0eURvdCA9IHsgY29sb3I6IHRoaXMuTk9fQ09MT1IgfTtcblx0ZG90c0NvdW50ID0gNTtcblx0Y3VycmVudCA9IFtdO1xuXHR3aWR0aCA9IDQ1O1xuXHRjb2xvcldpZHRoID0gMzU7XG5cdGNvbG9ycyA9IFtcblx0XHR7IGNvbG9yOiAnI2YwMCcgfSxcblx0XHR7IGNvbG9yOiAnI2Y5MCcgfSxcblx0XHR7IGNvbG9yOiAnI2FhMCcgfSxcblx0XHR7IGNvbG9yOiAnIzlmMCcgfSxcblx0XHR7IGNvbG9yOiAnIzBmMCcgfSxcblx0XHR7IGNvbG9yOiAnIzBmZCcgfSxcblx0XHR7IGNvbG9yOiAnIzBmZicgfVxuXHRdO1xuXHRxdWVzdGlvbiA9IHsgZG90czogW10gfTtcblxuXHQvLyB1c2VyQW5zd2Vyc1xuXHRwcml2YXRlIF91c2VyQW5zd2VycyA9IFtdO1xuXHRnZXQgdXNlckFuc3dlcnMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3VzZXJBbnN3ZXJzO1xuXHR9XG5cblx0Ly8gYWN0aXZlSW5wdXRJbmRleFxuXHRwcml2YXRlIF9hY3RpdmVJbnB1dEluZGV4ID0gMDtcblx0c2V0IGFjdGl2ZUlucHV0SW5kZXgoaSkge1xuXHRcdGlmIChpIDwgdGhpcy5kb3RzQ291bnQpIHRoaXMuX2FjdGl2ZUlucHV0SW5kZXggPSBpO1xuXHRcdGVsc2UgdGhpcy5fYWN0aXZlSW5wdXRJbmRleCA9IHRoaXMuX2FjdGl2ZUlucHV0SW5kZXg7XG5cdH1cblx0Z2V0IGFjdGl2ZUlucHV0SW5kZXgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2FjdGl2ZUlucHV0SW5kZXg7XG5cdH1cblxuXHQvLyByZXZlYWxRdWVzdGlvblxuXHRyZXZlYWxRdWVzdGlvbkV2ZW50OiBFdmVudEVtaXR0ZXI8YW55Pjtcblx0c2V0IHJldmVhbFF1ZXN0aW9uKGN1cnJlbnQpIHtcblx0XHR0aGlzLnJldmVhbFF1ZXN0aW9uRXZlbnQuZW1pdCh7IHJldmVhbDogdHJ1ZSB9KTtcblx0fVxuXG5cdC8vIHJldmVhbFF1ZXN0aW9uXG5cdG5ld0Fuc3dlckFkZGVkOiBFdmVudEVtaXR0ZXI8YW55Pjtcblx0ZW1pdFVzZXJBbnN3ZXJBZGRlZCgpIHtcblx0XHR0aGlzLm5ld0Fuc3dlckFkZGVkLmVtaXQoe30pO1xuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRvdHNDb3VudDsgaSsrKSB7XG5cdFx0XHR0aGlzLmN1cnJlbnQucHVzaChPYmplY3QuYXNzaWduKHt9LCB0aGlzLmVtcHR5RG90KSk7XG5cdFx0XHR0aGlzLnF1ZXN0aW9uLmRvdHMucHVzaChPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvbG9yc1tnZXRSYW5kb21JbnQodGhpcy5kb3RzQ291bnQpXSkpO1xuXHRcdH1cblx0XHR0aGlzLndpZHRoID0gNDU7XG5cdFx0dGhpcy5jb2xvcldpZHRoID0gNDA7XG5cdFx0dGhpcy5yZXZlYWxRdWVzdGlvbkV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cdFx0dGhpcy5uZXdBbnN3ZXJBZGRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXHR9XG5cblx0c2V0SW5wdXRDb2xvcihjb2xvcikge1xuXHRcdHRoaXMuY3VycmVudFt0aGlzLmFjdGl2ZUlucHV0SW5kZXhdLmNvbG9yID0gY29sb3I7XG5cdFx0dGhpcy5hY3RpdmVJbnB1dEluZGV4ICs9IDE7XG5cdH1cblx0c3VibWl0SW5wdXQoKSB7XG5cdFx0Ly8gY2hlY2sgaW5wdXRcblx0XHRsZXQgYW5zd2VyID0gdGhpcy5jdXJyZW50Lm1hcCh4ID0+IE9iamVjdC5hc3NpZ24oe30sIHgpKTtcblx0XHRjb25zdCBxdWVzdGlvbiA9IHRoaXMucXVlc3Rpb24uZG90cy5tYXAoeCA9PiBPYmplY3QuYXNzaWduKHt9LCB4KSk7XG5cdFx0Y29uc3QgaGFzUmVzdWx0ID0gZG90ID0+IGRvdC5jb3JyZWN0IHx8IGRvdC5wbGFjZTtcblx0XHRsZXQgY29ycmVjdEFuc3dlciA9IHRydWU7XG5cdFx0cXVlc3Rpb24uZm9yRWFjaCgoUWRvdCwgaSkgPT4ge1xuXHRcdFx0aWYgKFFkb3QuY29sb3IgPT09IGFuc3dlcltpXS5jb2xvcikge1xuXHRcdFx0XHRhbnN3ZXJbaV0uY29ycmVjdCA9IHRydWU7XG5cdFx0XHRcdFFkb3QuY29ycmVjdCA9IHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb3JyZWN0QW5zd2VyID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0aWYgKCFjb3JyZWN0QW5zd2VyKSB7XG5cdFx0XHRxdWVzdGlvbi5mb3JFYWNoKChRZG90LCBpKSA9PiB7XG5cdFx0XHRcdGlmICghaGFzUmVzdWx0KFFkb3QpKSB7XG5cdFx0XHRcdFx0YW5zd2VyLnNvbWUoQWRvdCA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoQWRvdC5jb2xvciA9PSBRZG90LmNvbG9yICYmICFoYXNSZXN1bHQoQWRvdCkpIHtcblx0XHRcdFx0XHRcdFx0UWRvdC5wbGFjZSA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdEFkb3QucGxhY2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRjb3JyZWN0QW5zd2VyID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZXZlYWxRdWVzdGlvbiA9IHRydWU7XG5cdFx0fVxuXG5cdFx0dGhpcy51c2VyQW5zd2Vycy5wdXNoKHsgZG90czogYW5zd2VyIH0pO1xuXHRcdHRoaXMuZW1pdFVzZXJBbnN3ZXJBZGRlZCgpO1xuXHR9XG59XG5cbmNvbnN0IGdldFJhbmRvbUludCA9IG1heCA9PiB7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG1heCkpO1xufTtcbiJdfQ==