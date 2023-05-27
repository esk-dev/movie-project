import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Search } from './search.model';

export interface SearchState extends EntityState<Search> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'search',
})
export class SearchStore extends EntityStore<SearchState> {
  constructor() {
    super();
  }
}
