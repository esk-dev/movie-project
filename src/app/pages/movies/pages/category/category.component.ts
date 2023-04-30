import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ITopMovie } from 'src/app/core/models/kinopoisk-base-api/kinopoisk-base-api.interface';
import {
  BehaviorSubject,
  Observable,
  Subject,
  filter,
  first,
  from,
  map,
  switchMap,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { SharedModalService } from 'src/app/shared/ui/shared-modal/shared-modal.service';
import { TopFilmsQuery, TopFilmsService } from 'src/app/core/store/top-films';
import { ITopFilm, ITopFilms, TOPS } from 'src/app/core/models/top.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit, OnDestroy {
  public type: TOPS = null;

  public topItems$: Observable<ITopFilms>;

  public pagePagination$: BehaviorSubject<number> = new BehaviorSubject(1);

  private destroy$: Subject<boolean> = new Subject();

  constructor(
    private topFilmsService: TopFilmsService,
    private topFilmsQuery: TopFilmsQuery,
    private moviesService: MoviesService,
    private sharedModalService: SharedModalService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.topItems$ = this.route.params.pipe(
      map((params: Params) => params['categoryType']),
      switchMap((parameter) => {
        this.type = parameter;
        return this.topFilmsQuery.queryTopFilms$(parameter);
      })
    );

    this.pagePagination$
      .pipe(
        filter((page: number) => page !== 1),
        switchMap((page: number) => this.getMoreItems(page)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public nextPage(): void {
    this.pagePagination$.next(this.pagePagination$.value + 1);
  }

  public getMoreItems(page: number): Observable<ITopFilms> {
    return this.topFilmsService.getTopFilms(this.type, page);
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
}
