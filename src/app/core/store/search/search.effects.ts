import { switchMap, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { SearchStore } from './search.store';
import { SearchService } from './search.service';
import { searchInFlixHq } from './search.actions';
import { IMovieResult, ISearch } from '@models/models.interface';
import { Actions, Effect, ofType } from '@datorama/akita-ng-effects';

@Injectable({
  providedIn: 'root',
})
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private store: SearchStore,
    private searchService: SearchService
  ) {}

  @Effect()
  searchInFlixHq$ = this.actions$.pipe(
    ofType(searchInFlixHq),
    switchMap(({ query, page }) =>
      this.searchService.searchInFlixHq(query, page)
    ),
    tap((entity: ISearch<IMovieResult>) => this.store.set({ 1: entity }))
  );
}
