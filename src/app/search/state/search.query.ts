import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SearchStore, SearchState } from './search.store';
import { Observable } from 'rxjs';
import { IMovieResult } from 'src/app/core/models/models.interface';

@Injectable({ providedIn: 'root' })
export class SearchQuery extends QueryEntity<SearchState> {
  constructor(store: SearchStore) {
    super(store);
  }

  public searchedResult$: Observable<IMovieResult[]> = this.selectLast(
    (state) => state?.results ?? []
  );
}
