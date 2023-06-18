import { Observable, map } from 'rxjs';
import { Injectable } from '@angular/core';
import { SearchStore } from './search.store';
import { ISearch } from '@models/search.interface';
import { IMovieResult } from '@models/movie.interface';
import { FlixHqService } from '@core/http/flix-hq.service';
import { transaction } from '@datorama/akita';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(
    private flixHqService: FlixHqService,
    private store: SearchStore
  ) {}

  public search(
    query: string,
    page: number = 1
  ): Observable<ISearch<IMovieResult>> {
    return this.flixHqService.search(query, page).pipe(
      map((response: ISearch<IMovieResult>) => ({
        query: query,
        ...response,
      }))
    );
  }

  @transaction()
  public updateSearch(state: ISearch<IMovieResult>): void {
    const { results, ...meta } = state;
    const storeSnapshot = this.store.getValue();

    if (storeSnapshot.query === state.query && storeSnapshot.hasNextPage) {
      this.store.add(results);
    } else {
      this.store.set(results);
    }

    this.store.updateMeta(meta);
  }
}
