import { catchError, map, switchMap, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { MovieStore } from './movie.store';
import { MovieService } from './movie.service';
import { IMovieInfo } from '@models/movie.interface';
import {
  fetchEpisodeStreamingLinks,
  fetchEpisodeStreamingLinksSuccess,
  fetchMovieInfo,
  fetchMovieInfoSuccess,
} from './movie.actions';
import { Actions, Effect, ofType } from '@datorama/akita-ng-effects';
import { ISource } from '@models/models.interface';

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
    ofType(fetchMovieInfo),
    switchMap(({ movieId }) => this.movieService.getMovieInfo(movieId)),
    catchError((error: any) => {
      throw new Error(error);
    }),
    tap((movieInfo: IMovieInfo) =>
      this.actions$.dispatch(fetchMovieInfoSuccess(movieInfo))
    )
  );

  @Effect()
  fetchMovieInfoSuccess$ = this.actions$.pipe(
    ofType(fetchMovieInfoSuccess),
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

  @Effect()
  fetchEpisodeStreamingLinks$ = this.actions$.pipe(
    ofType(fetchEpisodeStreamingLinks),
    switchMap(({ episodeId, movieId, server }) =>
      this.movieService
        .getEpisodeStreamingLinks(episodeId, movieId, server)
        .pipe(map((source: ISource) => ({ movieId: movieId, source: source })))
    ),
    catchError((error: any) => {
      throw new Error(error);
    }),
    tap(({ movieId, source }) =>
      this.actions$.dispatch(
        fetchEpisodeStreamingLinksSuccess({ movieId, source })
      )
    )
  );

  @Effect()
  fetchEpisodeStreamingLinksSuccess$ = this.actions$.pipe(
    ofType(fetchEpisodeStreamingLinksSuccess),
    tap(({ movieId, source }) =>
      this.store.update(movieId, (entity) => {
        return {
          ...entity,
          movieEpisodeStreamingLinks: source,
        };
      })
    )
  );
}
