import { IMovieResult } from '@models/movie.interface';

export interface Search extends IMovieResult {}

export function createSearch(params: Partial<Search>) {
  return { ...params } as Search;
}
