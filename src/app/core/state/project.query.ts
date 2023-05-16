import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { ProjectStore, ProjectState } from './project.store';

@Injectable({ providedIn: 'root' })
export class ProjectQuery extends Query<ProjectState> {
  constructor(protected override store: ProjectStore) {
    super(store);
  }
}
