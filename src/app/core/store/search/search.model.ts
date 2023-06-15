import { IMovieResult } from '@models/movie.interface';
import { ISearch } from '@models/search.interface';

export interface Search extends ISearch<IMovieResult> {}

export function createSearch(params: Partial<Search>) {
  return { ...params } as Search;
}
