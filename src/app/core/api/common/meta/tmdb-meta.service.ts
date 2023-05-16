import { Injectable } from '@angular/core';
import {
  IAnimeInfo,
  IAnimeResult,
  IEpisodeServer,
  IMovieInfo,
  IMovieResult,
  ISearch,
  META,
} from '@consumet/extensions';
import { Observable, from } from 'rxjs';
import TMDB from '@consumet/extensions/dist/providers/meta/tmdb';

@Injectable({
  providedIn: 'root',
})
export class TmdbMetaService {
  private tmdb: TMDB = new META.TMDB();

  public search(
    query: string,
    page: number
  ): Observable<ISearch<IMovieResult | IAnimeResult>> {
    return from(this.tmdb.search(query, page));
  }

  public fetchMediaInfo(
    mediaId: string,
    mediaType: string
  ): Observable<IMovieInfo | IAnimeInfo> {
    return from(this.tmdb.fetchMediaInfo(mediaId, mediaType));
  }

  public fetchEpisodeServers(
    episodeId: string,
    mediaId: string
  ): Observable<IEpisodeServer[]> {
    return from(this.tmdb.fetchEpisodeServers(episodeId, mediaId));
  }
}
