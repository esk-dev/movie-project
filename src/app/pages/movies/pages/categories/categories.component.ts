import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ITopMovie } from 'src/app/models/kinopoisk-base-api/kinopoisk-base-api.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public topMovies$!: Observable<ITopMovie[]>;

  public topOneThousandMovies$!: Observable<ITopMovie[]>;

  public topAwaitMovies$!: Observable<ITopMovie[]>;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.topMovies$ = this.moviesService.loadTopMovies(1);
    this.topOneThousandMovies$ = this.moviesService.loadTopOneThousandMovies(1);
    this.topAwaitMovies$ = this.moviesService.loadTopAwaitMovies(1);
  }

  public onClick(titleId: number) {
    this.router.navigate(['/title/', titleId]);
  }
}
