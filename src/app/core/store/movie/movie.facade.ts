import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MovieQuery } from './movie.query';
import { MovieStore } from './movie.store';
import { MovieService } from './movie.service';
import { fetchMovieInfo } from './movie.actions';
import { Actions } from '@datorama/akita-ng-effects';
import { IMovieInfo } from '@models/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieFacade {
  constructor(
    private actions: Actions,
    private store: MovieStore,
    private query: MovieQuery,
    private service: MovieService
  ) {}

  selectMovieInfo(movieId: string): Observable<IMovieInfo> {
    return this.query.selectEntity(movieId, (state) => state.movieMeta);
  }

  fetchMovieInfo(movieId: string): void {
    this.actions.dispatch(fetchMovieInfo({ movieId }));
  }
}
