import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITopMovies, ITopItem } from 'src/app/models';
import { HttpService } from 'src/app/services/http/http.service';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private httpService: HttpService) {}

  public loadTopMovies(): Observable<ITopItem[]> {
    return this.httpService
      .fetchTopMovies()
      .pipe(map((array: ITopMovies) => array.items.slice(0, 10)));
  }
}
