import { switchMap, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { MovieStore } from './movie.store';
import { MovieService } from './movie.service';
import { fecthMovieInfo } from './movie.actions';
import { IMovieInfo } from '@models/movie.interface';
import { Actions, Effect, ofType } from '@datorama/akita-ng-effects';

@Injectable({
  providedIn: 'root',
})
export class MovieEffects {
  constructor(
    private actions$: Actions,
    private store: MovieStore,
    private movieService: MovieService
  ) {}

  @Effect()
  fetchMovieInfo$ = this.actions$.pipe(
    ofType(fecthMovieInfo),
    switchMap(({ movieId }) => this.movieService.getMovieInfo(movieId)),
    tap((movie: IMovieInfo) =>
      this.store.set({
        [movie.id]: {
          id: movie.id,
          movieMeta: movie,
          availableServers: null,
          movieEpisodeStreamingLinks: null,
        },
      })
    )
  );
}
