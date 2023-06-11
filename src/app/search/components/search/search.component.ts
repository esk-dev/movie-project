import { Observable, from } from 'rxjs';
import { Component } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchFacadeService } from '../../services/search.facade';
import { IMovieResult } from 'src/app/core/models/models.interface';
import { SharedModalService } from '@shared/ui/shared-modal/shared-modal.service';
import { MediaDetailsComponent } from '@ui-kit/media-details/media-details.component';
import { searchInFlixHq } from '@core/store/search/search.actions';

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
      import('@ui-kit/media-details/media-details.component').then(
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

  public openTitleDetails() {
    // this.sharedModalService.showModal(this.mediaDetailsComponent$, );
  }

  public startSearch(query: string, page: number): void {
    this.actions.dispatch(searchInFlixHq({ query, page }));
  }
}
