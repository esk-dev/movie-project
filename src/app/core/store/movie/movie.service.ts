import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MovieStore } from './movie.store';
import { IMovieInfo } from '@models/movie.interface';
import { FlixHqService } from '@core/http/flix-hq.service';

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(
    private movieStore: MovieStore,
    private flixHqService: FlixHqService
  ) {}

  public getMovieInfo(movieId: string): Observable<IMovieInfo> {
    return this.flixHqService.getMovieInfo(movieId);
  }
}
