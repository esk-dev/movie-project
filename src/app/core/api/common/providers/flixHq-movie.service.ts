import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  IEpisodeServer,
  IMovieInfo,
  IMovieResult,
  ISearch,
  ISource,
  MOVIES,
  StreamingServers,
} from '@consumet/extensions';

import FlixHQ from '@consumet/extensions/dist/providers/movies/flixhq';

@Injectable({ providedIn: 'root' })
export class FlixHqMovieService {
  private flixHq: FlixHQ = new MOVIES.FlixHQ();

  public search(
    query: string,
    page: number = 1
  ): Observable<ISearch<IMovieResult>> {
    return from(this.flixHq.search(query, page));
  }

  public fetchMediaInfo(mediaId: string): Observable<IMovieInfo> {
    return from(this.flixHq.fetchMediaInfo(mediaId));
  }

  public fetchEpisodeSources(
    episodeId: string,
    mediaId: string,
    server: StreamingServers
  ): Observable<ISource> {
    return from(this.flixHq.fetchEpisodeSources(episodeId, mediaId, server));
  }

  public fetchEpisodeServers(
    episodeId: string,
    mediaId: string
  ): Observable<IEpisodeServer[]> {
    return from(this.flixHq.fetchEpisodeServers(episodeId, mediaId));
  }

  public fetchRecentMovies(): Observable<IMovieResult[]> {
    return from(this.flixHq.fetchRecentMovies());
  }
}
