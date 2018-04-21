import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AppComponent } from './app.component';
import { TestService } from './services/test.service';
import { ListComponent } from './views/list/list.component';

import { routes, navigatableComponents } from './app.routing';
import { SimpleGameService } from './views/simple-game/simple-game.service';
import { DotInputComponent } from './views/simple-game/dot-input/dot-input.component';
import { DotComponent } from './views/simple-game/dot/dot.component';
import { ColorPalletComponent } from './views/simple-game/color-pallet/color-pallet.component';
import { UserAnswersComponent } from './views/simple-game/user-answers/user-answers.component';
import { QuestionComponent } from './views/simple-game/question/question.component';

@NgModule({
	declarations: [AppComponent, ...navigatableComponents, DotInputComponent, DotComponent, ColorPalletComponent, UserAnswersComponent, QuestionComponent],
	bootstrap: [AppComponent],
	imports: [
		NativeScriptModule,
		NativeScriptFormsModule,
		NativeScriptHttpModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(routes)
	],
	providers: [TestService, SimpleGameService],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
