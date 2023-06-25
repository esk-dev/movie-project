import { Observable, from } from 'rxjs';
import { Component } from '@angular/core';
import { IMovieInfo } from '@models/movie.interface';
import { Search } from '@core/store/search/search.model';
import { MovieFacade } from '@core/store/movie/movie.facade';
import { SearchFacade } from '@core/store/search/search.facade';
import { stickyAnimation } from '@shared/animations/sticky.animation';
import { fadeSlideInOut } from '@shared/animations/fade-in-out.animation';
import { SharedModalService } from '@shared/shared-modal/shared-modal.service';
import { MediaDetailsComponent } from '@shared/components/media-details/media-details.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [fadeSlideInOut, stickyAnimation],
})
export class SearchComponent {
  public disabledBtn: boolean = true;

  public searchedResult$: Observable<Search[]> =
    this.searchFacade.selectResult$;

  public hasNextPage$: Observable<boolean> =
    this.searchFacade.selectHasNextPage$;

  public isLoading$: Observable<boolean> = this.searchFacade.selectIsLoading$;

  private mediaDetailsComponent$: Observable<typeof MediaDetailsComponent> =
    from(
      import('@shared/components/media-details/media-details.component').then(
        (component) => component.MediaDetailsComponent
      )
    );

  constructor(
    private movieFacade: MovieFacade,
    private searchFacade: SearchFacade,
    private sharedModalService: SharedModalService
  ) {}

  public openTitleDetails(movieId: string) {
    this.movieFacade.fetchMovieInfo(movieId);
    this.sharedModalService.showModal<IMovieInfo>(
      this.mediaDetailsComponent$,
      this.movieFacade.selectMovieInfo(movieId)
    );
  }

  public initSearch(query: string, page: number): void {
    this.searchFacade.initSearch(query, page);
  }

  public nextPage(): void {
    if (this.searchFacade.getHasNextPage()) {
      let nextPage = this.searchFacade.getCurrentPage();
      this.searchFacade.nextPage(this.searchFacade.getQuery(), ++nextPage);
    }
  }
}
