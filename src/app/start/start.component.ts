import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}

