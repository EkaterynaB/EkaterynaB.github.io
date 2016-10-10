"use strict";
var home_component_1 = require('../home.component');
var login_component_1 = require('../login.component');
var project_component_1 = require('../project.component');
var logged_in_guard_1 = require('../logged-in.guard');
exports.routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'project',
        component: project_component_1.ProjectComponent,
        canActivate: [logged_in_guard_1.LoggedInGuard] }
];
//# sourceMappingURL=app.routes.js.map