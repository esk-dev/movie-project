import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';
import {
  ITitleData,
  ITopMovie,
} from 'src/app/models/kinopoisk-base-api/kinopoisk-base-api.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  public titleData$!: Observable<ITitleData>;

  public topMovies: ITopMovie[] = [];

  public oneThousandMovies: ITopMovie[] = [];

  public awaitMovies: ITopMovie[] = [];

  private currentMoviesPack$: BehaviorSubject<number> = new BehaviorSubject(1);

  private currentOneThousandMoviesPack$: BehaviorSubject<number> =
    new BehaviorSubject(1);

  private currentAwaitMoviesPack$: BehaviorSubject<number> =
    new BehaviorSubject(1);

  private destroy$: Subject<boolean> = new Subject();

  constructor(private moviesService: MoviesService, private router: Router) {}

  public loadMoreSlides() {
    this.currentMoviesPack$.next(this.currentMoviesPack$.value + 1);
  }

  public onClick(titleId: number) {
    this.router.navigate(['/title/', titleId]);
  }

  ngOnInit(): void {
    this.currentMoviesPack$
      .pipe(
        switchMap((numberOfPage: number) =>
          this.moviesService.loadTopMovies(numberOfPage)
        ),
        takeUntil(this.destroy$)
      )
      .subscribe((data: ITopMovie[]) => this.topMovies.push(...data));
    this.titleData$ = this.moviesService.loadTitleDetails(3498);
    // this.currentOneThousandMoviesPack$
    //   .pipe(
    //     switchMap((numberOfPage: number) =>
    //       this.moviesService.loadTopOneThousandMovies(numberOfPage)
    //     ),
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe((data: ITopMovie[]) => this.oneThousandMovies.push(...data));

    // this.currentAwaitMoviesPack$
    //   .pipe(
    //     switchMap((numberOfPage: number) =>
    //       this.moviesService.loadTopAwaitMovies(numberOfPage)
    //     ),
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe((data: ITopMovie[]) => this.awaitMovies.push(...data));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
