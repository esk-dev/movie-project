import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { initSearch } from './search.actions';
import { Actions } from '@datorama/akita-ng-effects';
import { Search, SearchStore } from '@core/store/search';
import { SearchQuery } from '@core/store/search/search.query';
import { SearchService } from '@core/store/search/search.service';

@Injectable({
  providedIn: 'root',
})
export class SearchFacade {
  constructor(
    private actions: Actions,
    private query: SearchQuery,
    private store: SearchStore,
    private service: SearchService
  ) {}

  selectIsLoading$: Observable<boolean> = this.query.selectLoading();

  selectResult$: Observable<Search[]> = this.query.selectAll();

  selectHasNextPage$: Observable<boolean> = this.query.select(
    (state) => state.hasNextPage
  );

  getQuery(): string {
    return this.query.getValue().query;
  }

  getHasNextPage(): boolean {
    return this.query.getValue().hasNextPage;
  }

  getCurrentPage(): number {
    return this.query.getValue().currentPage;
  }

  initSearch(query: string, page: number): void {
    this.store.reset();
    this.actions.dispatch(initSearch({ query, page }));
  }

  nextPage(query: string, page: number): void {
    this.actions.dispatch(initSearch({ query, page }));
  }
}
