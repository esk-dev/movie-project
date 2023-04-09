import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TopFilm } from './top-film.model';

export interface TopFilmsState extends EntityState<TopFilm> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'top-films',
})
export class TopFilmsStore extends EntityStore<TopFilmsState> {
  constructor() {
    super();
  }
}
