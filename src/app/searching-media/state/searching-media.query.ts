import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import {
  SearchingMediaStore,
  SearchingMediaState,
} from './searching-media.store';
import { Observable } from 'rxjs';
import { SearchingMedia } from './searching-media.model';

@Injectable({ providedIn: 'root' })
export class SearchingMediaQuery extends QueryEntity<SearchingMediaState> {
  constructor(protected override store: SearchingMediaStore) {
    super(store);
  }

  public selectAllSearchingResults(): Observable<SearchingMedia[]> {
    return this.selectAll();
  }
}
