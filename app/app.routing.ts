import { ListComponent } from './views/list/list.component';
import { SimpleGameComponent } from './views/simple-game/simple-game.component';

export const routes = [{ path: 'list', component: ListComponent }, { path: '', component: SimpleGameComponent }];

export const navigatableComponents = [ListComponent, SimpleGameComponent];
