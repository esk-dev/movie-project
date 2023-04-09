import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ITopMovie } from 'src/app/core/models/kinopoisk-base-api/kinopoisk-base-api.interface';
import { Observable, from, map, switchMap, take } from 'rxjs';
import { SharedModalService } from 'src/app/shared/ui/shared-modal/shared-modal.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  public topItems$: Observable<ITopMovie[]>;

  constructor(
    private moviesService: MoviesService,
    private sharedModalService: SharedModalService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.topItems$ = this.route.params.pipe(
      map((params: Params) => params['categoryType']),
      switchMap((parameter) => this.moviesService.loadTop(parameter, 1))
    );
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
