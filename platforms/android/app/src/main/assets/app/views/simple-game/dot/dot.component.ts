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
	@Input() color: string = '#aaa';
	constructor(private sg: SimpleGameService) {}
	test() {
		this.color = '#aaa';
	}
}
