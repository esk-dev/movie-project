import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  from,
  Observable,
  Subject,
  switchMap,
  take,
  takeUntil,
} from 'rxjs';
import {
  ITitleData,
  ITopMovie,
} from 'src/app/models/kinopoisk-base-api/kinopoisk-base-api.interface';
import { SharedModalService } from 'src/app/shared/ui/shared-modal/shared-modal.service';
import { MoviesService } from '../../services/movies.service';
import { TOPS } from 'src/app/services/http/http.service';
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
    this.topMovies$ = this.moviesService
      .loadTopMovies(1)
      .pipe(takeUntil(this.destroy$));

    this.titleData$ = this.moviesService.loadTitleDetails(3498).pipe(take(1));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
