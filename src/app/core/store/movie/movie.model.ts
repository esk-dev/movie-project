import { IMovieInfo } from '@models/models.interface';

export interface Movie extends IMovieInfo {}

export function createMovie(params: Partial<Movie>) {
  return {
    ...params,
  } as Movie;
}
