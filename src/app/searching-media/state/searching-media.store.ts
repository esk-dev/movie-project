import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { SearchingMedia } from './searching-media.model';

export interface SearchingMediaState extends EntityState<SearchingMedia> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'searching-media',
})
export class SearchingMediaStore extends EntityStore<SearchingMediaState> {
  constructor() {
    super();
  }
}
