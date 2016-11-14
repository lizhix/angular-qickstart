import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit { // This = DashboardComponent

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        //var that = this;
        this.heroService.getHeroes()

            .then(heroes => this.heroes = heroes.slice(1, 13));
        //.then(function (heroes) { that.heroes = heroes.slice(1, 9); });

    }

}
