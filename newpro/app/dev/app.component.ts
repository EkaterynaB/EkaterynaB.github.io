import { Component } from '@angular/core';

@Component({
    selector: 'auth-app',
    template: `<div class="container body-container">
                    <nav>
                        <a routerLink="/home">Home</a>
                        <a routerLink="/project">Project</a>
                    </nav>
                   <router-outlet></router-outlet>
               </div>`
})
export class AppComponent {}

