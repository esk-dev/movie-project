import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TopFilmsStore, TopFilmsState } from './top-films.store';

@Injectable({ providedIn: 'root' })
export class TopFilmsQuery extends QueryEntity<TopFilmsState> {
  constructor(store: TopFilmsStore) {
    super(store);
  }
}
