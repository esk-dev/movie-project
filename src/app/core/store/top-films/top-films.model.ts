import { ID } from '@datorama/akita';
import { ITopFilms } from '../../models/top.interface';

export interface TopFilmsModel extends ITopFilms {
  id?: ID;
}

export function createTopFilm(params: Partial<TopFilmsModel>) {
  return {} as TopFilmsModel;
}
