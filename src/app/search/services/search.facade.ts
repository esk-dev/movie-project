import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { SearchQuery } from '@core/store/search/search.query';
import { SearchService } from '@core/store/search/search.service';
import { IMovieResult } from 'src/app/core/models/models.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchFacadeService {
  constructor(
    private searchQuery: SearchQuery,
    private searchService: SearchService
  ) {}

  public startSearch$(query: string, page: number = 1): Observable<any> {
    return this.searchService.searchInFlixHq(query, page);
  }

  public searchResult$(): Observable<IMovieResult[]> {
    return this.searchQuery.searchedResult$;
  }
}
