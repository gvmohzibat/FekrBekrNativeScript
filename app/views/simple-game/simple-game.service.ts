import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SimpleGameService {
	Q_COLOR = '#666';
	NO_COLOR = '#aaa';
	private emptyDot = { color: this.NO_COLOR };
	dotsCount = 5;
	current = [];
	width = 45;
	colorWidth = 35;
	colors = [
		{ color: '#f00' },
		{ color: '#f90' },
		{ color: '#aa0' },
		{ color: '#9f0' },
		{ color: '#0f0' },
		{ color: '#0fd' },
		{ color: '#0ff' }
	];
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

	// revealQuestion
	revealQuestionEvent: EventEmitter<any>;
	set revealQuestion(current) {
		this.revealQuestionEvent.emit({ reveal: true });
	}

	// revealQuestion
	newAnswerAdded: EventEmitter<any>;
	emitUserAnswerAdded() {
		this.newAnswerAdded.emit({});
	}

	constructor() {
		for (let i = 0; i < this.dotsCount; i++) {
			this.current.push(Object.assign({}, this.emptyDot));
			this.question.dots.push(Object.assign({}, this.colors[getRandomInt(this.dotsCount)]));
		}
		this.width = 45;
		this.colorWidth = 40;
		this.revealQuestionEvent = new EventEmitter<any>();
		this.newAnswerAdded = new EventEmitter<any>();
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
			this.revealQuestion = true;
		}

		this.userAnswers.push({ dots: answer });
		this.emitUserAnswerAdded();
	}
}

const getRandomInt = max => {
	return Math.floor(Math.random() * Math.floor(max));
};
