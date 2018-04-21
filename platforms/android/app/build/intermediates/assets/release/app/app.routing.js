"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_component_1 = require("./views/list/list.component");
var simple_game_component_1 = require("./views/simple-game/simple-game.component");
exports.routes = [{ path: 'list', component: list_component_1.ListComponent }, { path: '', component: simple_game_component_1.SimpleGameComponent }];
exports.navigatableComponents = [list_component_1.ListComponent, simple_game_component_1.SimpleGameComponent];
