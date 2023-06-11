import { Observable, map } from 'rxjs';
import { Search } from './search.model';
import { Injectable } from '@angular/core';
import { SearchStore } from './search.store';
import { ProviderService } from '@core/providers/provider.service';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(
    private store: SearchStore,
    private providerService: ProviderService
  ) {}

  public searchInFlixHq(query: string, page: number = 1): Observable<Search> {
    return this.providerService.provider.search(query, page).pipe(
      map((response: Search) => ({
        id: response.currentPage ?? 1,
        ...response,
      }))
    );
  }
}
