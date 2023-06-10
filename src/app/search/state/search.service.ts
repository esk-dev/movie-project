import { Observable, map, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { SearchStore } from './search.store';

import { FlixHqService } from 'src/app/core/http/flix-hq.service';
import { IMovieResult, ISearch } from 'src/app/core/models/models.interface';
import { Search } from './search.model';
import { TmdbService } from 'src/app/core/http/tmdb.service';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(
    private store: SearchStore,
    private tmdbService: TmdbService,
    private filxHqService: FlixHqService
  ) {}

  public search(
    query: string,
    page: number = 1
  ): Observable<ISearch<IMovieResult>> {
    return this.filxHqService.search(query, page).pipe(
      map((response: ISearch<IMovieResult>) => ({
        id: response.currentPage ?? 1,
        ...response,
      })),
      tap((v) => console.log(v)),
      tap((entity: Search) => this.store.set({ 1: entity }))
    );
  }
}
