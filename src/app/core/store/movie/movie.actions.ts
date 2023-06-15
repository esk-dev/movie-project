import { createAction, props } from '@datorama/akita-ng-effects';

export const fecthMovieInfo = createAction(
  '[ Movie ] Fetch in FlixHq',
  props<{ movieId: string }>()
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
