import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import {
  SearchingMediaStore,
  SearchingMediaState,
} from './searching-media.store';
import { Observable, map } from 'rxjs';
import { SearchingMedia } from './searching-media.model';
import { IMovieResult } from '@consumet/extensions';

@Injectable({ providedIn: 'root' })
export class SearchingMediaQuery extends QueryEntity<SearchingMediaState> {
  constructor(protected override store: SearchingMediaStore) {
    super(store);
  }

  public selectAllSearchingResults(): Observable<IMovieResult[]> {
    return this.select('searchingMedia').pipe(
      map((entity: SearchingMedia) => entity.results)
    );
  }
}
