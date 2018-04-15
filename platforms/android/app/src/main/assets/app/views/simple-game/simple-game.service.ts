import { Injectable } from '@angular/core';

@Injectable()
export class SimpleGameService {
	dotsCount = 4;
	get width() {
		return 50;
	}
	get colorWidth() {
		return 35;
	}
	colors = [
		{ color: '#f00' },
		{ color: '#f90' },
		{ color: '#ff0' },
		{ color: '#9f0' },
		{ color: '#0f0' },
		{ color: '#0f9' },
		{ color: '#0ff' }
	];

	get userAnswers() {
		return [
			{ dots: [{ color: '#f00' }, { color: '#f00' }, { color: '#f00' }, { color: '#f00' }] },
			{ dots: [{ color: '#f90' }, { color: '#f90' }, { color: '#f90' }, { color: '#f00' }] }
		];
	}
	get current() {
		return [{ color: '#f00' }, { color: '#f90' }, { color: '#ff0' }, { color: '#9f0' }];
	}
}
