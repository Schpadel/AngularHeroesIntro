import { Component } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  selectedHero?: Hero;

  constructor(private heroService: HeroService) {}
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}

