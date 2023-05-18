import { ID } from '@datorama/akita';
import { IMovieResult, ISearch } from 'src/app/core/models/models.interface';

export interface SearchingMedia extends ISearch<IMovieResult> {
  id?: ID;
}

export function createSearchingMedia(params: Partial<SearchingMedia>) {
  return {
    ...params,
  } as SearchingMedia;
}
