import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        map((params: Params) => params['id']),
        switchMap((titleId: string) =>
          this.moviesService.loadTitleDetails(titleId)
        )
      )
      .subscribe((v) => console.log(v));
  }
}
