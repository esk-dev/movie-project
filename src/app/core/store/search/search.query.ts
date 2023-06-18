import { Search } from './search.model';
import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SearchStore, SearchState } from './search.store';

@Injectable({ providedIn: 'root' })
export class SearchQuery extends QueryEntity<SearchState, Search> {
  constructor(store: SearchStore) {
    super(store);
  }
}
