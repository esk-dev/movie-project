import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MovieStore } from './movie.store';
import { ISource } from '@models/models.interface';
import { FlixHqService } from '@core/http/flix-hq.service';
import { IMovieInfo, Servers } from '@models/movie.interface';

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(
    private movieStore: MovieStore,
    private flixHqService: FlixHqService
  ) {}

  public getMovieInfo(movieId: string): Observable<IMovieInfo> {
    return this.flixHqService.getMovieInfo(movieId);
  }

  public getEpisodeStreamingLinks(
    episodeId: string,
    movieId: string,
    server: Servers
  ): Observable<ISource> {
    return this.flixHqService.getMovieEpisodeStreamingLinks(
      episodeId,
      movieId,
      server
    );
  }
}
