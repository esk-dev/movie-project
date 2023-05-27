import { ID } from '@datorama/akita';
import { IMovieResult, ISearch } from 'src/app/core/models/models.interface';

export interface Search extends ISearch<IMovieResult> {
  id: ID;
}

export function createSearch(params: Partial<Search>) {
  return {
    ...params,
  } as Search;
}
