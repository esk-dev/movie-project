import { InjectionToken, inject } from '@angular/core';
import { PaginatorPlugin } from '@datorama/akita';
import { TopFilmsQuery } from './top-films.query';

export const TOP_FILMS_PAGINATOR = new InjectionToken('TOP_FILMS_PAGINATOR', {
  providedIn: 'root',
  factory: () => {
    const topFilmsQuery = inject(TopFilmsQuery);
    return new PaginatorPlugin(topFilmsQuery).withControls();
  },
});
