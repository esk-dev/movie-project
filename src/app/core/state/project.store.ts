import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {
  MovieProjectEntities,
  MovieProjectEntity,
} from '../models/models.interface';

export interface ProjectState extends MovieProjectEntity {}

export function createInitialState(): ProjectState {
  return {
    ...MovieProjectEntities,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'project' })
export class ProjectStore extends Store<ProjectState> {
  constructor() {
    super(createInitialState());
  }
}
