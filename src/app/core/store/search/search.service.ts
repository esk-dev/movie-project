import { Observable, map } from 'rxjs';
import { Search } from './search.model';
import { Injectable } from '@angular/core';
import { SearchStore } from './search.store';
import { FlixHqService } from '@core/http/flix-hq.service';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(
    private store: SearchStore,
    private flixHqService: FlixHqService
  ) {}

  public searchInFlixHq(query: string, page: number = 1): Observable<Search> {
    return this.flixHqService.search(query, page).pipe(
      map((response: Search) => ({
        id: response.currentPage ?? 1,
        ...response,
      }))
    );
  }
}
