import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { MovieQuery } from '@core/store/movie';
import { SearchQuery } from '@core/store/search/search.query';
import { SearchService } from '@core/store/search/search.service';
import { IMovieInfo, IMovieResult } from '@models/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchFacadeService {
  constructor(
    private movieQuery: MovieQuery,
    private searchQuery: SearchQuery,
    private searchService: SearchService
  ) {}

  public startSearch$(query: string, page: number = 1): Observable<any> {
    return this.searchService.searchInFlixHq(query, page);
  }

  public searchResult$(): Observable<IMovieResult[]> {
    return this.searchQuery.searchedResult$;
  }

  public getMovieMeta(movieId: string): Observable<IMovieInfo> {
    return this.movieQuery.movieMeta$(movieId);
  }
}
