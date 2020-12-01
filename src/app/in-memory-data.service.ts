import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
 
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 11, name: 'Windstorm' },
      { id: 12, name: 'Bombasto' },
      { id: 13, name: 'Magneta' },
      { id: 14, name: 'Tornado' },
      { id: 15, name: 'Marta' },
      { id: 16, name: 'Anna' },
      { id: 17, name: 'Ralf' },
      { id: 18, name: 'Dingo' },
      { id: 19, name: 'Duffy' },
      { id: 20, name: 'Bong' },
    ];
    return {items};
  }
}
