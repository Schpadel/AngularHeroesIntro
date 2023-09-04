import { Component } from '@angular/core';
import {Hero} from "../hero";
import {HEROES} from "../mock-heroes";
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  hero: Hero = {
    id: 1,
    name: "Schpadel"
  };
  protected readonly HEROES = HEROES;
}

export class HeroesComponent {
  heroes = HEROES;
}
