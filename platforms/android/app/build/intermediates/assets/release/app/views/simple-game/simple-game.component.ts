import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleGameService } from './simple-game.service';
import { Page } from 'ui/page';

@Component({
	selector: 'simple-game',
	moduleId: module.id,
	templateUrl: './simple-game.html',
	styleUrls: ['./simple-game.css']
})
export class SimpleGameComponent implements OnInit {
	dotsCount = this.sg.dotsCount;
	constructor(private sg: SimpleGameService, private page: Page) {
		this.sg.$newAnswerAdded.subscribe(result => this.scrollUserAnswersViewToBottom());
	}
	ngOnInit() {
		this.page.actionBarHidden = true;
	}
	scrollUserAnswersViewToBottom() {
		// console.log('w');
		let userAnswersScrollView: any = this.page.getViewById('user-answers-scrollView');
		// console.log(userAnswersScrollView.scrollableHeight);
		setTimeout(() => {
			userAnswersScrollView.scrollToVerticalOffset(userAnswersScrollView.scrollableHeight, false);
		}, 20);
	}
}
