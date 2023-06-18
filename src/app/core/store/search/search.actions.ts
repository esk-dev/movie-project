import { ISearch } from '@models/search.interface';
import { IMovieResult } from '@models/movie.interface';
import { createAction, props } from '@datorama/akita-ng-effects';

export const initSearch = createAction(
  '[Search] Init search',
  props<{ query: string; page: number }>()
);

export const initSearchSuccess = createAction(
  '[ Search ] Init Search Success',
  props<ISearch<IMovieResult>>()
);

export const initSearchFailure = createAction(
  '[ Search ] Init Search Failure',
  props<{ error: any }>()
);

export const nextPage = createAction(
  '[Search] Next page',
  props<{ query: string }>()
);

export const prevPage = createAction('[Search] Prev page');
