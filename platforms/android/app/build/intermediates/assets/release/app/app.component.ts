import { Component } from '@angular/core';
import { TestService } from './services/test.service';
import { Router } from '@angular/router';

@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	constructor(private test: TestService, private router: Router) {}
}
