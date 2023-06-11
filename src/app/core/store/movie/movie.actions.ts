import { createAction, props } from '@datorama/akita-ng-effects';

export const fecthFlixhHqMovieInfo = createAction(
  '[ Movie ] Fetch in FlixHq',
  props<{ mediaId: string }>()
);

export const fetchFlixHqMovieEpisodeAvailableServers = createAction(
  '[ Movie ] Fetch Available Servers',
  props<{ episodeId: string; mediaId: string }>()
);
