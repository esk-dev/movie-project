import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from '../../services/movies.service';
import { ITopItem } from './../../../../models/index';

enum MoviesCategotyTitles {
  top = 'Top 250 Movies',
  popular = 'Popular Movies',
}
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public topMovies!: Observable<ITopItem[]>;

  public popularMovies!: Observable<ITopItem[]>;

  public categoryTitles = MoviesCategotyTitles;

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngOnInit(): void {
    this.topMovies = this.moviesService.loadTopMovies();
  }

  public onClick(titleId: string) {
    this.router.navigate(['/title/', titleId]);
  }
}
