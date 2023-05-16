import { Injectable } from '@angular/core';
import {
  SearchingMedia,
  SearchingMediaQuery,
  SearchingMediaService,
} from '../state';
import { Observable, take } from 'rxjs';
import { IAnimeResult, IMovieResult } from '@consumet/extensions';

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
    return this.searchingMediaService
      .getSearchResult(query, page)
      .pipe(take(1));
  }

  public searchResult$(): Observable<IMovieResult[]> {
    return this.searchingMediaQuery.selectAllSearchingResults();
  }
}
