import { Observable, from } from 'rxjs';
import { Component } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { Search } from '@core/store/search/search.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fecthMovieInfo } from '@core/store/movie/movie.actions';
import { IMovieInfo } from '@models/movie.interface';
import { SearchFacadeService } from '../../../core/store/search/search.facade';
import { SharedModalService } from '@shared/shared-modal/shared-modal.service';
import { MediaDetailsComponent } from '@shared/components/media-details/media-details.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public form: FormGroup = null;

  public searchedResult$: Observable<Search[]> =
    this.searchFacadeService.getResult$;

  // public search$: Observable<Search> = this.searchFacadeService.$;

  private mediaDetailsComponent$: Observable<typeof MediaDetailsComponent> =
    from(
      import('@shared/components/media-details/media-details.component').then(
        (component) => component.MediaDetailsComponent
      )
    );

  public isLoading$: Observable<boolean> =
    this.searchFacadeService.getIsLoading$;

  constructor(
    private fb: FormBuilder,
    private actions: Actions,
    private sharedModalService: SharedModalService,
    private searchFacadeService: SearchFacadeService
  ) {
    this.form = this.fb.group({
      searchInput: this.fb.control(''),
    });
  }

  public openTitleDetails(movieId: string) {
    this.actions.dispatch(fecthMovieInfo({ movieId }));
    this.sharedModalService.showModal<IMovieInfo>(
      this.mediaDetailsComponent$
      // this.searchFacadeService.getMovieMeta(movieId)
    );
  }

  public startSearch(query: string, page: number): void {
    this.searchFacadeService.search(query, page);
  }

  public nextPage(): void {
    if (this.searchFacadeService.getHasNextPage()) {
      let nextPage = this.searchFacadeService.getCurrentPage();
      this.searchFacadeService.search(
        this.searchFacadeService.getQuery(),
        ++nextPage
      );
    }
  }
}
