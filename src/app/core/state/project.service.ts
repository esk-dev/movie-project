import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectStore } from './project.store';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  constructor(private projectStore: ProjectStore, private http: HttpClient) {}
}
