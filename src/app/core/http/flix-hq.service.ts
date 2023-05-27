import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { FLIXHQ_API_URL } from '../tokens/tokens';
import {
  ISearch,
  IMovieResult,
  IEpisodeServer,
  ISource,
} from '../models/models.interface';
import { IMovieInfo } from '../models/models.interface';

@Injectable({
  providedIn: 'root',
})
export class FlixHqService {
  constructor(
    @Inject(FLIXHQ_API_URL) private URL: string,
    private http: HttpClient
  ) {}

  /**
   * Search movies
   *
   * @param query
   * @param page
   * @returns
   */
  public search(
    query: string,
    page: number = 1
  ): Observable<ISearch<IMovieResult>> {
    return this.http.get<ISearch<IMovieResult>>(
      `${this.URL}/${query}?page=${page}`
    );
  }

  public getMovieInfo(movieId: string): Observable<ISearch<IMovieInfo>> {
    return this.http.get<ISearch<IMovieInfo>>(`${this.URL}/info?id=${movieId}`);
  }

  /**
   * Available servers links
   * @param episodeId
   * @param mediaId
   * @returns
   */
  public getMovieEpisodeAvailableServers(
    episodeId: string,
    mediaId: string
  ): Observable<IEpisodeServer[]> {
    return this.http.get<IEpisodeServer[]>(
      `${this.URL}/servers?episodeId=${episodeId}&mediaId=${mediaId}`
    );
  }

  /**
   * Fetch streaming links for media
   * @param episodeId
   * @param mediaId
   * @param server
   * @returns {ISource}
   */
  public getMovieEpisodeStreamingLinks(
    episodeId: string,
    mediaId: string,
    server: 'mixdrop' | 'vidcloud' | 'upcloud'
  ): Observable<ISource> {
    return this.http.get<ISource>(`
      ${this.URL}/watch?episodeId=${episodeId}&mediaId=${mediaId}&server=${server}
    `);
  }
}
