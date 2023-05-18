import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  SearchingMedia,
  SearchingMediaQuery,
  SearchingMediaService,
} from '../state';

@Injectable({
  providedIn: 'root',
})
export class SearchingMediaFacade {
  constructor(
    private searchingMediaQuery: SearchingMediaQuery,
    private searchingMediaService: SearchingMediaService
  ) {}

  public startSearch$(
    query: string,
    page: number = 1
  ): Observable<SearchingMedia> {
    return this.searchingMediaService.getSearchResult(query, page);
  }

  public searchResult$(): Observable<SearchingMedia[]> {
    return this.searchingMediaQuery.selectAllSearchingResults();
  }
}
