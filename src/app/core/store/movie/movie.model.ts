import { ID } from '@datorama/akita';
import { IEpisodeServer, ISource } from '@models/models.interface';
import { IMovieInfo } from '@models/movie.interface';

export interface Movie {
  id: ID;
  movieMeta: IMovieInfo;
  availableServers: IEpisodeServer[];
  movieEpisodeStreamingLinks: ISource;
}

export function createMovie(params: Partial<Movie>) {
  return {
    ...params,
  } as Movie;
}
