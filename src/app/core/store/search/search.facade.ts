import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { SearchQuery } from '@core/store/search/search.query';
import { SearchService } from '@core/store/search/search.service';
import { Search, SearchStore } from '@core/store/search';
import { Actions } from '@datorama/akita-ng-effects';
import { initSearch } from './search.actions';

@Injectable({
  providedIn: 'root',
})
export class SearchFacadeService {
  constructor(
    private actions: Actions,
    private store: SearchStore,
    private query: SearchQuery,
    private service: SearchService
  ) {}

  getQuery(): string {
    return this.query.getValue().query;
  }

  // getHasNextPage: boolean = this.query.getValue().hasNextPage;
  getHasNextPage(): boolean {
    return this.query.getValue().hasNextPage;
  }

  getCurrentPage(): number {
    return this.query.getValue().currentPage;
  }

  getIsLoading$: Observable<boolean> = this.query.selectLoading();

  getResult$: Observable<Search[]> = this.query.selectAll();

  search(query: string, page: number): void {
    this.actions.dispatch(initSearch({ query, page }));
  }

  // nextPage(): void {
  //   this.actions.dispatch(nextPage());
  // }
  // getSearch$: Observable<Search> = this.query.selectLast();
}
