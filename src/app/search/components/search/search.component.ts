import { Component } from '@angular/core';
import { SearchFacadeService } from '../../state';
import { Observable, take } from 'rxjs';
import { IMovieResult } from 'src/app/core/models/models.interface';
// import { SearchedMeta } from '../../interface/searched-meta.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public searchedResult$: Observable<IMovieResult[]> =
    this.searchFacadeService.searchResult$();

  // public searchedMeta$: Observable<SearchedMeta> = this.searchFacadeService;

  constructor(private searchFacadeService: SearchFacadeService) {}

  public startSearch(query: string, page: number): void {
    this.searchFacadeService
      .startSearch$(query, page)
      .pipe(take(1))
      .subscribe();
  }
}
