import { Component } from '@angular/core';
import { SearchingMediaFacade } from '../services/search.facade';
import { switchMap } from 'rxjs';

@Component({
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss'],
})
export class SearchingComponent {
  constructor(private searchingMediaFacade: SearchingMediaFacade) {
    this.getSearch('avengers')
      .pipe(switchMap(() => this.searchingMediaFacade.searchResult$()))
      .subscribe((v) => console.log(v));
  }

  public getSearch(query: string) {
    return this.searchingMediaFacade.startSearch$(query, 1);
  }
}
