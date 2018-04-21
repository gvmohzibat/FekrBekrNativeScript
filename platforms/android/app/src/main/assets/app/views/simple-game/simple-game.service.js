"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SimpleGameService = /** @class */ (function () {
    function SimpleGameService() {
        this.Q_COLOR = '#666';
        this.NO_COLOR = '#aaa';
        this.ALL_COLORS = [
            { color: '#607D8B' },
            { color: '#795548' },
            { color: '#C62828' },
            { color: '#FF5722' },
            { color: '#FF9900' },
            { color: '#FFD600' },
            { color: '#AFB42B' },
            { color: '#7CB342' },
            { color: '#4CAF50' },
            { color: '#009688' },
            { color: '#00BCD4' },
            { color: '#2196F3' },
            { color: '#3F51B5' },
            { color: '#4527A0' },
            { color: '#9C27B0' },
            { color: '#E91E63' } // pink
        ];
        this.emptyDot = { color: this.NO_COLOR };
        this.dotsCount = 5;
        this.colorsCount = 8;
        this.current = [];
        this.width = 45;
        this.colorWidth = 35;
        this.colors = this.ALL_COLORS;
        this.question = { dots: [] };
        // userAnswers
        this._userAnswers = [];
        // activeInputIndex
        this._activeInputIndex = 0;
        this.chooseColors();
        for (var i = 0; i < this.dotsCount; i++) {
            this.current.push(Object.assign({}, this.emptyDot));
            this.question.dots.push(Object.assign({}, this.colors[getRandomInt(this.dotsCount)]));
        }
        this.width = 45;
        this.colorWidth = 40;
        this.$gameFinished = new core_1.EventEmitter();
        this.$newAnswerAdded = new core_1.EventEmitter();
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
    Object.defineProperty(SimpleGameService.prototype, "gameFinished", {
        set: function (current) {
            this.$gameFinished.emit({ reveal: true, disableInput: true, disablePallet: true });
        },
        enumerable: true,
        configurable: true
    });
    SimpleGameService.prototype.emitUserAnswerAdded = function () {
        this.$newAnswerAdded.emit({});
    };
    SimpleGameService.prototype.chooseColors = function () {
        var colorInc = Math.floor(this.ALL_COLORS.length / this.colorsCount);
        this.colors = [];
        // let j = 0;
        for (var i = 0; i < this.colorsCount; i++) {
            this.colors.push(this.ALL_COLORS[i]);
            // j += colorInc;
        }
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
            this.gameFinished = true;
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
