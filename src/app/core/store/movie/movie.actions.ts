import { IMovieInfo } from '@models/movie.interface';
import { createAction, props } from '@datorama/akita-ng-effects';
import { ISource } from '@models/models.interface';

export const fetchMovieInfo = createAction(
  '[ Movie ] Fetch Movie Info',
  props<{ movieId: string }>()
);

export const fetchMovieInfoSuccess = createAction(
  '[ Movie ] Fetch Movie Info Success',
  props<IMovieInfo>()
);

export const fetchEpisodeAvailableServers = createAction(
  '[ Movie ] Fetch Available Servers',
  props<{ episodeId: string; movieId: string }>()
);

export const fetchEpisodeStreamingLinks = createAction(
  '[ Movie ] Fetch Episode Streaming Links',
  props<{
    episodeId: string;
    movieId: string;
    server?: 'mixdrop' | 'vidcloud' | 'upcloud';
  }>()
);

export const fetchEpisodeStreamingLinksSuccess = createAction(
  '[ Movie ] Fetch Episode Streaming Links Success',
  props<{ movieId: string; source: ISource }>()
);
