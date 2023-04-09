import { ID } from '@datorama/akita';
import { ITopFilms } from '../../models/top.interface';

export interface TopFilm extends ITopFilms {
  id?: ID;
}

export function createTopFilm(params: Partial<TopFilm>) {
  return {} as TopFilm;
}
