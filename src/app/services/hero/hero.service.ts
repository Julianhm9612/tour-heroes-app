import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Mock
import { HEROES } from '../../mock-heroes';

// Classes
import { Hero } from 'src/app/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  public getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
