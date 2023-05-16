import { Component } from '@angular/core';
import { SearchingMediaFacade } from '../services/search.facade';

@Component({
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss'],
})
export class SearchingComponent {
  constructor(private searchingMediaFacade: SearchingMediaFacade) {
    this.getSearch('avengers');
  }

  public getSearch(query: string) {
    this.searchingMediaFacade.startSearch$(query, 1).subscribe();
    this.searchingMediaFacade.searchResult$().subscribe((v) => console.log(v));
  }
}
