import { Inject, Injectable } from '@angular/core';
import { TMDB_API_URL } from '../tokens/tokens';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovieResult, ISearch } from '../models/models.interface';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  constructor(
    @Inject(TMDB_API_URL) private URL: string,
    private http: HttpClient
  ) {}

  public search(
    query: string,
    page: number = 1
  ): Observable<ISearch<IMovieResult>> {
    return this.http.get<ISearch<IMovieResult>>(
      `${this.URL}/${query}?page=${page}`
    );
  }
}
