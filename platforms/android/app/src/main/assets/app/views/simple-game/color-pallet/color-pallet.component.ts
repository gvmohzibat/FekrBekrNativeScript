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
	palletEnabled: boolean = true;
	constructor(private sg: SimpleGameService) {
		this.sg.$gameFinished.subscribe(result => this.gameFinished(result));
	}
	selectPallet(c) {
		this.sg.setInputColor(c.color);
	}
	gameFinished(data) {
		this.palletEnabled = !data.disablePallet;
	}
}
