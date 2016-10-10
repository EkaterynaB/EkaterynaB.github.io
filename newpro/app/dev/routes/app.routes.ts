import { HomeComponent } from '../home.component';
import { LoginComponent } from '../login.component';
import { ProjectComponent } from '../project.component';
import { LoggedInGuard } from '../logged-in.guard';

export const routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'project',
        component: ProjectComponent,
        canActivate: [LoggedInGuard] }
];
