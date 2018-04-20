import { Component, Input } from '@angular/core';
import { SimpleGameService } from '../simple-game.service';

@Component({
	selector: 'dot',
	moduleId: module.id,
	templateUrl: './dot.component.html',
	styleUrls: ['./dot.component.css']
})
export class DotComponent {
	width: number = this.sg.width;
	Q_COLOR: string = this.sg.Q_COLOR;
	@Input() dot: any = { color: this.sg.NO_COLOR };
	@Input() question: boolean = false;
	@Input() selected: boolean = false;

	constructor(private sg: SimpleGameService) {
		this.sg.revealQuestionEvent.subscribe(result => this.revealQuestionChange(result));
	}
	revealQuestionChange(data) {
		this.question = !data.reveal;
	}
}
