import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
  ITopMovie,
  ITitleData,
  IApiResponse,
} from 'src/app/models/kinopoisk-base-api/kinopoisk-base-api.interface';
import { HttpService, TopTypes } from 'src/app/services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpService: HttpService) {}

  public loadTopMovies(pageNumber: number): Observable<ITopMovie[]> {
    return this.httpService
      .fetchTopMovies('TOP_250_BEST_FILMS', pageNumber)
      .pipe(map((response: IApiResponse) => response.films));
  }

  public loadTop(type: TopTypes, pageNumber: number): Observable<ITopMovie[]> {
    return this.httpService
      .fetchTopMovies(type, pageNumber)
      .pipe(map((response: IApiResponse) => response.films));
  }

  public loadTopOneThousandMovies(pageNumber: number): Observable<ITopMovie[]> {
    return this.httpService
      .fetchTopMovies('TOP_100_POPULAR_FILMS', pageNumber)
      .pipe(map((response: IApiResponse) => response.films));
  }

  public loadTopAwaitMovies(pageNumber: number): Observable<ITopMovie[]> {
    return this.httpService
      .fetchTopMovies('TOP_AWAIT_FILMS', pageNumber)
      .pipe(map((response: IApiResponse) => response.films));
  }

  public loadTitleDetails(titleId: number): Observable<ITitleData> {
    return this.httpService.fetchTitleDetails(titleId);
  }
}
