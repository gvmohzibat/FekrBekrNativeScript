import { Component } from '@angular/core';
import { SimpleGameService } from '../simple-game.service';

@Component({
	selector: 'color-pallet',
	moduleId: module.id,
	templateUrl: './color-pallet.component.html',
	styleUrls: ['./color-pallet.component.css']
})
export class ColorPalletComponent {
	colorWidth: number = this.sg.colorWidth;
	colors = this.sg.colors;
	constructor(private sg: SimpleGameService) {}
}
