import { Component } from '@angular/core';
import { SimpleGameService } from '../simple-game.service';

@Component({
	selector: 'question',
	moduleId: module.id,
	templateUrl: './question.component.html',
	styleUrls: ['./question.component.css']
})
export class QuestionComponent {
	question: any = this.sg.question;
	constructor(private sg: SimpleGameService) {}
}
