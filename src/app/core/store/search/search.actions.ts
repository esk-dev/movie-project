import { createAction, props } from '@datorama/akita-ng-effects';

export const searchInTmdb = createAction(
  '[Search] Init search in tmdb',
  props<{ query: string; page: number }>
);

export const searchInFlixHq = createAction(
  '[Search] Init search in flixHq',
  props<{ query: string; page: number }>()
);

export const nextPage = createAction('[Search] Next page');

export const prevPage = createAction('[Search] Prev page');
