import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  distinctUntilChanged,
  filter,
  from,
  Observable,
  Subject,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { ITopFilms, TOPS } from 'src/app/core/models/top.interface';
import { MoviesService } from '../../services/movies.service';
import { ITitleData } from 'src/app/core/models/kinopoisk-base-api/kinopoisk-base-api.interface';
import { SharedModalService } from 'src/app/shared/ui/shared-modal/shared-modal.service';
import {
  TopFilmsModel,
  TopFilmsQuery,
  TopFilmsService,
} from 'src/app/core/store/top-films';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  public titleData$!: Observable<ITitleData>;

  public topBestFilms$: Observable<ITopFilms>;

  public topPopularFilms$: Observable<ITopFilms>;

  public tops = TOPS;

  private destroy$: Subject<boolean> = new Subject();

  private component$ = from(
    import(
      'src/app/shared/ui/title-details/components/title-details/title-details.component'
    ).then((component) => component.TitleDetailsComponent)
  );

  constructor(
    private topFilmsQuery: TopFilmsQuery,
    private moviesService: MoviesService,
    private topFilmsService: TopFilmsService,
    private sharedModalService: SharedModalService
  ) {}

  public openTitleDetails(titleId: number) {
    this.sharedModalService.showModal(
      this.component$,
      this.moviesService.loadTitleDetails(titleId).pipe(take(1))
    );
  }

  ngOnInit(): void {
    this.topFilmsService.loadTops().pipe(takeUntil(this.destroy$)).subscribe();
    this.titleData$ = this.moviesService.loadTitleDetails(3498).pipe(take(1));

    this.topBestFilms$ = this.topFilmsQuery.topBestFilms$.pipe(
      filter((response: TopFilmsModel) => !!response),
      distinctUntilChanged(),
      tap((v) => console.log(v))
    );

    this.topPopularFilms$ = this.topFilmsQuery.topPopularFilms$;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
