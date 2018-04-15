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
	constructor(private sg: SimpleGameService) {}
}
