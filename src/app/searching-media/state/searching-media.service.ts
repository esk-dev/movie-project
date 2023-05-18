import { Injectable } from '@angular/core';
import { SearchingMediaStore } from './searching-media.store';
import { Observable, tap } from 'rxjs';
import { SearchingMedia } from './searching-media.model';
import { TmdbMetaService } from 'src/app/core/api/common/meta/tmdb-meta.service';
import { SearchingMediaQuery } from './searching-media.query';

@Injectable({ providedIn: 'root' })
export class SearchingMediaService {
  constructor(
    protected store: SearchingMediaStore,
    private tmdbMetaService: TmdbMetaService,
    private searchingMediaQuery: SearchingMediaQuery
  ) {}

  getSearchResult(query: string, page: number): Observable<SearchingMedia> {
    this.store.setLoading(true);
    return this.tmdbMetaService.search<SearchingMedia>(query, page).pipe(
      tap((entities) => {
        console.log(entities);
        this.store.setLoading(false);
        this.store.set({ searchedResults: entities });
      })
    );
  }
}
