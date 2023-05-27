import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { SearchQuery } from './search.query';
import { SearchService } from './search.service';
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
    return this.searchService.search(query, page);
  }

  public searchResult$(): Observable<IMovieResult[]> {
    return this.searchQuery.searchedResult$;
  }
}
