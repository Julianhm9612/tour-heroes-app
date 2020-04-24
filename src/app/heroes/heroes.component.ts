import { Component, OnInit } from '@angular/core';

// Interfaces
import { Hero } from '../hero';

// Mocks
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public selectedHero: Hero;
  public heroes: Hero[];

  constructor() {
    this.heroes = HEROES;
  }

  ngOnInit(): void {
    
  }

  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
