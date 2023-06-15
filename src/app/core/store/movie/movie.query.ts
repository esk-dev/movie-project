import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MovieStore, MovieState } from './movie.store';
import { IMovieInfo } from '@models/movie.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieQuery extends QueryEntity<MovieState> {
  constructor(store: MovieStore) {
    super(store);
  }

  public movieMeta$ = (movieId: string): Observable<IMovieInfo> =>
    this.selectEntity(movieId, (entity) => entity.movieMeta);
}
