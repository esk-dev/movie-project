/* eslint-disable @typescript-eslint/no-unused-vars */
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
/**
 * Meta
 * Search
 * https://api.consumet.org/meta/tmdb/{query}?page={page}
 * Get Movie Info
 * https://api.consumet.org/meta/tmdb/info/{id}?type={media-type}
 * Get Movie Episode Streaming Links
 * https://api.consumet.org/meta/tmdb/watch/{episodeId}?id={showId}
 */

/**
 *
 */
export interface IBaseApi {
  readonly provider: string;
  search<T>(query: string, page: number): Observable<T>;
  getMediaInfo<T>(mediaId: number, mediaType: string): Observable<T>;
  getMovieEpisodeStreamingLinks<T>(
    episodeId: string,
    showId: string
  ): Observable<T>;
}

export class BaseMetaApiClass {
  private readonly provider: string = null;

  constructor(protected http: HttpClient, provider: string) {
    this.provider = provider;
  }

  /**
   * Shared method for consument providers for meta
   * @param query
   * @param page
   * @returns
   */
  public search<T>(query: string, page: number = 1): Observable<T> {
    return this.http.get<T>(
      `${environment.META_BASE_URL}/${this.provider}/` +
        `${query}` +
        `?page=${page}`
    );
  }

  public getMediaInfo<T>(mediaId: number, mediaType: string): Observable<T> {
    return this.http.get<T>(
      `${environment.META_BASE_URL}/${this.provider}/info` +
        `${mediaId}` +
        `?type=${mediaType}`
    );
  }

  public getMovieEpisodeStreamingLinks<T>(
    episodeId: string,
    showId: string
  ): Observable<T> {
    return this.http.get<T>(`
      ${environment.META_BASE_URL}/${this.provider}/watch/${episodeId}?id=${showId}
    `);
  }
}
