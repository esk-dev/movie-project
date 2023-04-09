import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { TopFilmsStore, TopFilmsState } from './top-films.store';
import { TopFilmsModel } from './top-films.model';
import { Observable } from 'rxjs';
import { TOPS } from '../../models/top.interface';

@Injectable({ providedIn: 'root' })
export class TopFilmsQuery extends QueryEntity<TopFilmsState> {
  constructor(store: TopFilmsStore) {
    super(store);
  }

  public topBestFilms$: Observable<TopFilmsModel> = this.selectEntity(
    TOPS.TOP_250_BEST_FILMS
  );

  public topPopularFilms$: Observable<TopFilmsModel> = this.selectEntity(
    TOPS.TOP_100_POPULAR_FILMS
  );

  public topAwaitFilms$: Observable<TopFilmsModel> = this.selectEntity(
    TOPS.TOP_AWAIT_FILMS
  );

  public queryTopFilms$(type: TOPS): Observable<TopFilmsModel> {
    return this.selectEntity(type);
  }
}
