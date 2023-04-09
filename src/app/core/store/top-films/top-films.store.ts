import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { TopFilmsModel } from './top-films.model';

export interface TopFilmsState extends EntityState<TopFilmsModel, string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'top-films',
})
export class TopFilmsStore extends EntityStore<TopFilmsState, TopFilmsModel> {
  constructor() {
    super();
  }
}
