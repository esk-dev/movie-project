import { Injectable } from '@angular/core';
import { MovieStore } from './movie.store';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(private movieStore: MovieStore, private http: HttpClient) {}
}
