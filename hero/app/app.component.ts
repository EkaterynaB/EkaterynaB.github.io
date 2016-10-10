import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` <h1>{{title}} <span *ngIf="!selectedHero">....</span></h1>
   <a routerLink="/heroes">Heroes</a>
   <a routerLink="/dashboard">dashboard</a>
   <router-outlet></router-outlet>
                `
})
export class AppComponent {
    title = "I want to be a ";
}
