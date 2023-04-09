import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TopFilmsStore } from './top-films.store';
import { TopFilmsApiService } from '../../api/top/top-films-api.service';
import { ITopFilms } from '../../models/top.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TopFilmsService {
  constructor(
    private topFilmsStore: TopFilmsStore,
    private topFilmsApiService: TopFilmsApiService
  ) {}

  getTop(): Observable<ITopFilms> {
    return this.topFilmsApiService
      .getTop('TOP_250_BEST_FILMS')
      .pipe(
        tap((topFilms: ITopFilms) =>
          this.topFilmsStore.set({ topFilms: topFilms })
        )
      );
  }
}
