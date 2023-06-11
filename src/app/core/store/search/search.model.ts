import { IMovieResult, ISearch } from '@models/models.interface';

export interface Search extends ISearch<IMovieResult> {}

export function createSearch(params: Partial<Search>) {
  return { ...params } as Search;
}
