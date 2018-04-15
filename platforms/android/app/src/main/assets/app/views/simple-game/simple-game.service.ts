import { Injectable } from '@angular/core';

@Injectable()
export class SimpleGameService {
	private emptyDot = { color: NO_COLOR };
	Q_COLOR = '#666';
	dotsCount = 4;
	current = [];
	width = 45;
	colorWidth = 35;
	colors = [
		{ color: '#f00' },
		{ color: '#f90' },
		{ color: '#ff0' },
		{ color: '#9f0' },
		{ color: '#0f0' },
		{ color: '#0f9' },
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
	}
	get activeInputIndex() {
		return this._activeInputIndex;
	}

	constructor() {
		for (let i = 0; i < this.dotsCount; i++) {
			this.current.push(Object.assign({}, this.emptyDot));
			this.question.dots.push(Object.assign({}, this.colors[getRandomInt(this.dotsCount)]));
		}
		this.width = 45;
		this.colorWidth = 35;
	}

	setInputColor(color) {
		this.current[this.activeInputIndex].color = color;
	}
	submitInput() {
		this.userAnswers.push({ dots: this.current.map(x => Object.assign({}, x)) });
	}
}

const NO_COLOR = '#ccc';
const getRandomInt = max => {
	return Math.floor(Math.random() * Math.floor(max));
};
