import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  ITitleData,
  IApiResponse,
} from '../../models/kinopoisk-base-api/kinopoisk-base-api.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

enum TOPS {
  TOP_250_BEST_FILMS = 'TOP_250_BEST_FILMS',
  TOP_100_POPULAR_FILMS = 'TOP_100_POPULAR_FILMS',
  TOP_AWAIT_FILMS = 'TOP_AWAIT_FILMS',
}

type TopTypes =
  | 'TOP_250_BEST_FILMS'
  | 'TOP_100_POPULAR_FILMS'
  | 'TOP_AWAIT_FILMS';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': '47745a43-0a1c-4f70-acc2-a31f207f8e4b',
    }),
  };

  public fetch<T>(
    endpoint: string,
    term?: string,
    query?: string
  ): Observable<T> {
    return this.http.get<T>(
      `${environment.API_BASE_URL}${endpoint}${term}${query}`,
      this.httpOptions
    );
  }

  public fetchTopMovies(
    type: TopTypes,
    page: number = 1
  ): Observable<IApiResponse> {
    return this.fetch<IApiResponse>(
      '/top',
      `?type=${TOPS[type]}`,
      `&page=${page}`
    );
  }

  public fetchTitleDetails(titelId: number): Observable<ITitleData> {
    return this.fetch<ITitleData>(`${titelId}`);
  }
}
