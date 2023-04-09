import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Observable, Subject, take } from 'rxjs';
import { TOPS } from 'src/app/core/models/top.interface';
import { MoviesService } from '../../services/movies.service';
import {
  ITitleData,
  ITopMovie,
} from 'src/app/core/models/kinopoisk-base-api/kinopoisk-base-api.interface';
import { SharedModalService } from 'src/app/shared/ui/shared-modal/shared-modal.service';
import { TopFilmsService } from 'src/app/core/store/top-films';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  public titleData$!: Observable<ITitleData>;

  public topMovies$: Observable<ITopMovie[]>;

  public oneThousandMovies: ITopMovie[] = [];

  public awaitMovies: ITopMovie[] = [];

  public tops = TOPS;

  private destroy$: Subject<boolean> = new Subject();

  constructor(
    private topFilmsService: TopFilmsService,
    private moviesService: MoviesService,
    private router: Router,
    private sharedModalService: SharedModalService
  ) {}

  public onClick(titleId: number) {
    this.router.navigate(['/title/', titleId]);
  }

  public openTitleDetails(titleId: number) {
    this.sharedModalService.showModal(
      this.component$,
      this.moviesService.loadTitleDetails(titleId).pipe(take(1))
    );
  }

  private component$ = from(
    import(
      'src/app/shared/ui/title-details/components/title-details/title-details.component'
    ).then((component) => component.TitleDetailsComponent)
  );

  ngOnInit(): void {
    this.topFilmsService.getTop().subscribe();
    // this.topMovies$ = this.topService
    //   .getTop('TOP_250_BEST_FILMS')
    //   .pipe(takeUntil(this.destroy$));

    this.titleData$ = this.moviesService.loadTitleDetails(3498).pipe(take(1));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
