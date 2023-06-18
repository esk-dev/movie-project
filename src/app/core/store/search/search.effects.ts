import { catchError, switchMap, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { initSearch, initSearchSuccess } from './search.actions';
import { Actions, Effect, ofType } from '@datorama/akita-ng-effects';

import { SearchQuery } from './search.query';
import { SearchStore } from './search.store';
import { SearchService } from './search.service';
import { ISearch } from '@models/search.interface';
import { IMovieResult } from '@models/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private store: SearchStore,
    private query: SearchQuery,
    private service: SearchService
  ) {}

  @Effect()
  initSearch$ = this.actions$.pipe(
    ofType(initSearch),
    switchMap(({ query, page }) => this.service.search(query, page)),
    catchError((error: any) => {
      // this.actions$.dispatch(initSearchFailure(error));
      throw new Error(error);
    }),
    tap((response: ISearch<IMovieResult>) => {
      this.actions$.dispatch(initSearchSuccess(response));
    })
  );

  @Effect()
  initSearchSuccess$ = this.actions$.pipe(
    ofType(initSearchSuccess),
    tap((state: ISearch<IMovieResult>) => {
      this.service.updateSearch(state);
    })
  );

  // @Effect()
  // nextPage$ = this.actions$.pipe(
  //   ofType(nextPage),
  //   switchMap(({ query }) => this.query.selectEntity(query)),
  //   switchMap((searchState: Search) =>
  //     this.service.searchInFlixHq(
  //       searchState.query,
  //       searchState.currentPage + 1
  //     )
  //   ),
  //   tap((entity: ISearch<IMovieResult>) =>
  //     this.store.update(entity.query, { results: entity.results })
  //   )
  // );
}
