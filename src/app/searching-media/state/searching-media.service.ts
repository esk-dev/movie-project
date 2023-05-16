import { Injectable } from '@angular/core';
import { SearchingMediaStore } from './searching-media.store';
import { Observable, tap } from 'rxjs';
import { SearchingMedia } from './searching-media.model';
import { TmdbMetaService } from 'src/app/core/api/common/meta/tmdb-meta.service';
import { SearchingMediaQuery } from './searching-media.query';
import { FlixHqMovieService } from 'src/app/core/api/common/providers/flixHq-movie.service';

@Injectable({ providedIn: 'root' })
export class SearchingMediaService {
  constructor(
    protected store: SearchingMediaStore,
    private flixHqMovieService: FlixHqMovieService,
    private searchingMediaQuery: SearchingMediaQuery
  ) {}

  getSearchResult(query: string, page: number): Observable<SearchingMedia> {
    this.store.setLoading(true);
    const req$: Observable<SearchingMedia> = this.flixHqMovieService
      .search(query, page)
      .pipe(
        tap((entities) => {
          this.store.setLoading(false);
          this.store.set({ searchingMedia: entities });
        })
      );
    return req$;
  }
}
