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
	@Input() color: string = '#aaa';
	@Input() question: boolean = false;
	@Input() selected: boolean = false;
	constructor(private sg: SimpleGameService) {}
}
