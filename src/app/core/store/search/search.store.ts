import { Injectable } from '@angular/core';
import {
  EntityState,
  EntityStore,
  StoreConfig,
  transaction,
} from '@datorama/akita';
import { Search } from './search.model';
import { ISearch } from '@models/search.interface';
import { IMovieResult } from '@models/movie.interface';

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
    loading: false,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'search',
  resettable: true,
})
export class SearchStore extends EntityStore<SearchState> {
  constructor() {
    super(createInitialState());
  }

  @transaction()
  updateState(updatedState: ISearch<IMovieResult>) {
    const { results, ...meta } = updatedState;
    const storeSnapshot = this.getValue();

    if (
      storeSnapshot.query === updatedState.query &&
      storeSnapshot.hasNextPage
    ) {
      this.add(results);
    } else {
      this.set(results);
    }

    this.updateMeta(meta);
  }

  updateMeta(meta: SearchState) {
    this.update({
      ...meta,
    });
  }
}
