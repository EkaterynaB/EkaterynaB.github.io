import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    template: `
          <h1>{{title}}</h1>
          <h2>My Heroes</h2>
          <ul class="heroes">
            <li *ngFor="let hero of heroes"
              [class.selected]="hero === selectedHero"
              (click)="onSelect(hero)">
              <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
          </ul>
          <div *ngIf="selectedHero">
              <h2>
                {{selectedHero.name | uppercase}} is my hero
              </h2>
              <button (click)="gotoDetail()">View Details</button>
            </div>
`

})
export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private _heroService: HeroService,
                private router: Router) {}
    onSelect(hero) {
        this.selectedHero = hero;
    }
    getHeroes(): void {
        //this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}