import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Search } from './search.model';

export interface SearchState extends EntityState<Search> {
  currentPage?: number;
  hasNextPage?: boolean;
  totalPages?: number;
  /**
   * total results must include results from all pages
   */
  totalResults?: number;
  query?: string;
}

function createInitialState(): SearchState {
  return {
    currentPage: null,
    hasNextPage: null,
    totalPages: null,
    totalResults: null,
    query: null,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'search',
})
export class SearchStore extends EntityStore<SearchState> {
  constructor() {
    super(createInitialState());
  }

  updateMeta(meta: SearchState) {
    this.update({
      ...meta,
    });
  }
}
