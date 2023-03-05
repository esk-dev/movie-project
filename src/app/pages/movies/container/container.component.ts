import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesService } from '../services/movies.service';
import { ITopItem } from './../../../models/index';

enum MoviesCategotyTitles {
  top = 'Top 250 Movies',
  popular = 'Popular Movies',
}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  public topMovies!: Observable<ITopItem[]>;

  public popularMovies!: Observable<ITopItem[]>;

  public categoryTitles = MoviesCategotyTitles;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.topMovies = this.moviesService.loadTopMovies();
  }
}
