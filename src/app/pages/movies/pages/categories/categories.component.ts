import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, Observable, Subject, take, takeUntil } from 'rxjs';
import { ITopFilms, TOPS } from 'src/app/core/models/top.interface';
import { MoviesService } from '../../services/movies.service';
import {
  ITitleData,
  ITopMovie,
} from 'src/app/core/models/kinopoisk-base-api/kinopoisk-base-api.interface';
import { SharedModalService } from 'src/app/shared/ui/shared-modal/shared-modal.service';
import { TopFilmsQuery, TopFilmsService } from 'src/app/core/store/top-films';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  public titleData$!: Observable<ITitleData>;

  public topBestFilms$: Observable<ITopFilms> =
    this.topFilmsQuery.topBestFilms$;

  public topPopularFilms$: Observable<ITopFilms> =
    this.topFilmsQuery.topPopularFilms$;

  public topAwaitFilms$: Observable<ITopFilms> =
    this.topFilmsQuery.topAwaitFilms$;

  public tops = TOPS;

  private destroy$: Subject<boolean> = new Subject();

  private component$ = from(
    import(
      'src/app/shared/ui/title-details/components/title-details/title-details.component'
    ).then((component) => component.TitleDetailsComponent)
  );

  constructor(
    private topFilmsService: TopFilmsService,
    private topFilmsQuery: TopFilmsQuery,
    private moviesService: MoviesService,
    private router: Router,
    private sharedModalService: SharedModalService
  ) {}

  public openTitleDetails(titleId: number) {
    this.sharedModalService.showModal(
      this.component$,
      this.moviesService.loadTitleDetails(titleId).pipe(take(1))
    );
  }

  ngOnInit(): void {
    this.topFilmsService.getTops().pipe(takeUntil(this.destroy$)).subscribe();
    this.titleData$ = this.moviesService.loadTitleDetails(3498).pipe(take(1));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
