import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TopFilmsStore } from './top-films.store';
import { TopFilmsApiService } from '../../api/top/top-films-api.service';
import { ITopFilms, TOPS, TopTypes } from '../../models/top.interface';
import { Observable, combineLatest } from 'rxjs';
import { arrayAdd, arrayUpdate } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class TopFilmsService {
  constructor(
    private topFilmsStore: TopFilmsStore,
    private topFilmsApiService: TopFilmsApiService
  ) {}

  getTops(): Observable<{
    [TOPS.TOP_250_BEST_FILMS]: ITopFilms;
    [TOPS.TOP_100_POPULAR_FILMS]: ITopFilms;
    [TOPS.TOP_AWAIT_FILMS]: ITopFilms;
  }> {
    return combineLatest({
      [TOPS.TOP_250_BEST_FILMS]:
        this.topFilmsApiService.getTop('TOP_250_BEST_FILMS'),
      [TOPS.TOP_100_POPULAR_FILMS]: this.topFilmsApiService.getTop(
        'TOP_100_POPULAR_FILMS'
      ),
      [TOPS.TOP_AWAIT_FILMS]: this.topFilmsApiService.getTop('TOP_AWAIT_FILMS'),
    }).pipe(
      tap(
        (response: {
          [TOPS.TOP_250_BEST_FILMS]: ITopFilms;
          [TOPS.TOP_100_POPULAR_FILMS]: ITopFilms;
          [TOPS.TOP_AWAIT_FILMS]: ITopFilms;
        }) => this.topFilmsStore.set({ ...response })
      )
    );
  }

  getTopFilms(type: TopTypes, page: number = 1): Observable<ITopFilms> {
    return this.topFilmsApiService.getTop(type, page).pipe(
      tap((response: ITopFilms) =>
        this.topFilmsStore.update(type, ({ films }) => ({
          films: arrayAdd(films, response.films),
        }))
      )
    );
  }
}
