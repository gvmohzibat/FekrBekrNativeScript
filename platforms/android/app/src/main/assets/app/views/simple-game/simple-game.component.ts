import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleGameService } from './simple-game.service';

@Component({
	selector: 'simple-game',
	moduleId: module.id,
	templateUrl: './simple-game.html',
	styleUrls: ['./simple-game.css']
})
export class SimpleGameComponent {
	dotsCount = this.sg.dotsCount;
	constructor(private router: Router, private sg: SimpleGameService) {}
	submit() {
		alert('wef');
		this.router.navigate(['/list']);
	}
}
