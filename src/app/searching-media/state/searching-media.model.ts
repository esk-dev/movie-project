import { ID } from '@datorama/akita';
import { ISearch, IMovieResult, IAnimeResult } from '@consumet/extensions';

export interface SearchingMedia extends ISearch<IMovieResult> {
  id?: ID;
}

export function createSearchingMedia(params: Partial<SearchingMedia>) {
  return {
    ...params,
  } as SearchingMedia;
}
