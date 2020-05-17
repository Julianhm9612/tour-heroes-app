import { Component, OnInit } from '@angular/core';

// Classes
import { Hero } from '../hero';

// Services
import { HeroService } from '../services/hero/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[];

  constructor(private heroService: HeroService) {
    this.heroes = [];
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  public getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => {
      this.heroes = heroes.slice(1, 5);
    });
  }

}
