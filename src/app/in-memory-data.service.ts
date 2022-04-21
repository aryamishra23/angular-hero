// #docregion , init
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Arya' },
      { id: 12, name: 'Arya' },
      { id: 13, name: 'Sheerisha' },
      { id: 14, name: 'Avinash' },
      { id: 15, name: 'Badsha' },
      { id: 16, name: 'Aparna' },
      { id: 17, name: 'Medha' },
      { id: 18, name: 'Rakesh' },
      { id: 19, name: 'Ajay' },
      { id: 20, name: 'shubham' }
    ];
    return {heroes};
  }


  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
