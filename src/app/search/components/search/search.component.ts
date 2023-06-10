import { Component } from '@angular/core';
import { SearchFacadeService } from '../../state';
import { Observable, take } from 'rxjs';
import { IMovieResult } from 'src/app/core/models/models.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { SearchedMeta } from '../../interface/searched-meta.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public form: FormGroup = null;

  public searchedResult$: Observable<IMovieResult[]> =
    this.searchFacadeService.searchResult$();

  // public searchedMeta$: Observable<SearchedMeta> = this.searchFacadeService;

  constructor(
    private searchFacadeService: SearchFacadeService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      searchInput: this.fb.control(''),
    });

    this.form.valueChanges.subscribe((data) => console.log(data));
  }

  public startSearch(query: string, page: number): void {
    console.log(query);
    this.searchFacadeService
      .startSearch$(query, page)
      .pipe(take(1))
      .subscribe();
  }
}
