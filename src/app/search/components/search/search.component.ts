import { Observable, from } from 'rxjs';
import { Component } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { IMovieInfo, IMovieResult } from '@models/movie.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { searchInFlixHq } from '@core/store/search/search.actions';
import { SearchFacadeService } from '../../services/search.facade';
import { SharedModalService } from '@shared/ui/shared-modal/shared-modal.service';
import { MediaDetailsComponent } from '@shared/components/media-details/media-details.component';
import { fecthMovieInfo } from '@core/store/movie/movie.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public form: FormGroup = null;

  public searchedResult$: Observable<IMovieResult[]> =
    this.searchFacadeService.searchResult$();

  private mediaDetailsComponent$: Observable<typeof MediaDetailsComponent> =
    from(
      import('@shared/components/media-details/media-details.component').then(
        (component) => component.MediaDetailsComponent
      )
    );

  // public searchedMeta$: Observable<SearchedMeta> = this.searchFacadeService;

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
      this.mediaDetailsComponent$,
      this.searchFacadeService.getMovieMeta(movieId)
    );
  }

  public startSearch(query: string, page: number): void {
    this.actions.dispatch(searchInFlixHq({ query, page }));
  }
}
