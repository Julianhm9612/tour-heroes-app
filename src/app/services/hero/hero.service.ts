import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Mock
import { HEROES } from '../../mock-heroes';

// Classes
import { Hero } from 'src/app/hero';

// Services
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  public getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: Fetched heroes');
    return of(HEROES);
  }

  public getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id = ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
