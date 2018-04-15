import { Component } from '@angular/core';
import { SimpleGameService } from '../simple-game.service';

@Component({
	selector: 'user-answers',
	moduleId: module.id,
	templateUrl: './user-answers.component.html',
	styleUrls: ['./user-answers.component.css']
})
export class UserAnswersComponent {
	answers: any[] = this.sg.userAnswers;
	constructor(private sg: SimpleGameService) {}
}
