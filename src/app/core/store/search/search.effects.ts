import { switchMap, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { SearchStore } from './search.store';
import { SearchService } from './search.service';
import { searchInFlixHq } from './search.actions';
import { Actions, Effect, ofType } from '@datorama/akita-ng-effects';

import { ISearch } from '@models/search.interface';
import { IMovieResult } from '@models/movie.interface';

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
    tap((entity: ISearch<IMovieResult>) =>
      this.store.set({ [entity.currentPage]: entity })
    )
  );
}
