import { Observable, shareReplay } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApiClass } from '../base-api.class';
import { ITopFilms, TOPS, TopTypes } from 'src/app/core/models/top.interface';

@Injectable({
  providedIn: 'root',
})
export class TopFilmsApiService extends BaseApiClass {
  constructor(http: HttpClient) {
    super(http, 'top', 'ITopFilms', 'top');
  }

  public getTop(type: TopTypes, pageNumber: number = 1): Observable<ITopFilms> {
    return this.get<ITopFilms>(`?type=${TOPS[type]}&page=${pageNumber}`).pipe(
      shareReplay({ refCount: true, bufferSize: 1 })
    );
  }
}
