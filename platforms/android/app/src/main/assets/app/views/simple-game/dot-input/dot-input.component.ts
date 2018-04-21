import { Component } from '@angular/core';
import { SimpleGameService } from '../simple-game.service';

@Component({
	selector: 'dot-input',
	moduleId: module.id,
	templateUrl: './dot-input.component.html',
	styleUrls: ['./dot-input.component.css']
})
export class DotInputComponent {
	input: any[] = this.sg.current;
	dotsCount = this.sg.dotsCount;
	inputEnabled: boolean = true;
	constructor(private sg: SimpleGameService) {
		this.sg.$gameFinished.subscribe(result => this.gameFinished(result));
	}
	inputSelect(i) {
		this.sg.activeInputIndex = i;
	}
	submit() {
		this.sg.submitInput();
	}
	gameFinished(data) {
		this.inputEnabled = !data.disableInput;
	}
}
