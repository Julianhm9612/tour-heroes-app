import { Component, OnInit } from '@angular/core';

// Interfaces
import { Hero } from '../hero';

// Mocks
import { HEROES } from '../mock-heroes';

// Services
import { HeroService } from '../services/hero/hero.service';
import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public selectedHero: Hero;
  public heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {
    this.heroes = [];
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // public onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  // }

}
