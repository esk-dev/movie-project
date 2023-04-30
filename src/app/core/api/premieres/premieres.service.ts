import { Observable, map, shareReplay } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseApiClass } from '../base-api.class';
import { HttpClient } from '@angular/common/http';
import { IApiResponse, IPremieres } from '../../models/premieres.interface';
@Injectable({
  providedIn: 'root',
})
export class PremieresService extends BaseApiClass {
  constructor(http: HttpClient) {
    super(http, 'premieres', 'IPremieres', 'premieres');
  }

  public getPremieres(year: number, month: string): Observable<IPremieres[]> {
    return this.get<IApiResponse>(`?year=${year}&month=${month}`).pipe(
      map((response: IApiResponse) => response.items),
      shareReplay(1)
    );
  }
}
