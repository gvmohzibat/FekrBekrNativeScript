import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SimpleGameService {
	Q_COLOR = '#666';
	NO_COLOR = '#aaa';
	ALL_COLORS = [
		{ color: '#607D8B' }, // gray
		{ color: '#795548' }, // brown
		{ color: '#C62828' }, // dark red
		{ color: '#FF5722' }, // red
		{ color: '#FF9900' }, // orange
		{ color: '#FFD600' }, // yellow
		{ color: '#AFB42B' }, // pooz
		{ color: '#7CB342' }, // pastei
		{ color: '#4CAF50' }, // green
		{ color: '#009688' }, // nafti
		{ color: '#00BCD4' }, // cyan
		{ color: '#2196F3' }, // blue
		{ color: '#3F51B5' }, // dark blue
		{ color: '#4527A0' }, // purple
		{ color: '#9C27B0' }, // purple pink
		{ color: '#E91E63' } // pink
	];
	private emptyDot = { color: this.NO_COLOR };
	dotsCount = 5;
	colorsCount = 8;
	current = [];
	width = 45;
	colorWidth = 35;
	colors = this.ALL_COLORS;
	question = { dots: [] };

	// userAnswers
	private _userAnswers = [];
	get userAnswers() {
		return this._userAnswers;
	}

	// activeInputIndex
	private _activeInputIndex = 0;
	set activeInputIndex(i) {
		if (i < this.dotsCount) this._activeInputIndex = i;
		else this._activeInputIndex = this._activeInputIndex;
	}
	get activeInputIndex() {
		return this._activeInputIndex;
	}

	// gameFinished
	$gameFinished: EventEmitter<any>;
	set gameFinished(current) {
		this.$gameFinished.emit({ reveal: true, disableInput: true, disablePallet: true });
	}

	// gameFinished
	$newAnswerAdded: EventEmitter<any>;
	emitUserAnswerAdded() {
		this.$newAnswerAdded.emit({});
	}

	constructor() {
		this.chooseColors();
		for (let i = 0; i < this.dotsCount; i++) {
			this.current.push(Object.assign({}, this.emptyDot));
			this.question.dots.push(Object.assign({}, this.colors[getRandomInt(this.dotsCount)]));
		}
		this.width = 45;
		this.colorWidth = 40;
		this.$gameFinished = new EventEmitter<any>();
		this.$newAnswerAdded = new EventEmitter<any>();
	}

	private chooseColors() {
		const colorInc = Math.floor(this.ALL_COLORS.length / this.colorsCount);
		this.colors = [];
		// let j = 0;
		for (let i = 0; i < this.colorsCount; i++) {
			this.colors.push(this.ALL_COLORS[i]);
			// j += colorInc;
		}
	}

	setInputColor(color) {
		this.current[this.activeInputIndex].color = color;
		this.activeInputIndex += 1;
	}
	submitInput() {
		// check input
		let answer = this.current.map(x => Object.assign({}, x));
		const question = this.question.dots.map(x => Object.assign({}, x));
		const hasResult = dot => dot.correct || dot.place;
		let correctAnswer = true;
		question.forEach((Qdot, i) => {
			if (Qdot.color === answer[i].color) {
				answer[i].correct = true;
				Qdot.correct = true;
			} else {
				correctAnswer = false;
			}
		});
		if (!correctAnswer) {
			question.forEach((Qdot, i) => {
				if (!hasResult(Qdot)) {
					answer.some(Adot => {
						if (Adot.color == Qdot.color && !hasResult(Adot)) {
							Qdot.place = true;
							Adot.place = true;
							correctAnswer = false;
							return true;
						}
					});
				}
			});
		} else {
			this.gameFinished = true;
		}

		this.userAnswers.push({ dots: answer });
		this.emitUserAnswerAdded();
	}
}

const getRandomInt = max => {
	return Math.floor(Math.random() * Math.floor(max));
};
