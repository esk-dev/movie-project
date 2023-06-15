import { Observable } from 'rxjs';
import { TMDB_API_URL } from '../tokens/tokens';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ISearch } from '@models/search.interface';
import { IMovieResult } from '@models/movie.interface';

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
