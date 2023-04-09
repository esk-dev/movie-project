/* eslint-disable @typescript-eslint/no-unused-vars */
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface IBaseApi {
  readonly _urn: string;
  readonly _model: string;
  readonly _entityName: string;
  readonly _httpHeaders: HttpHeaders;
  get<T>(query?: string): Observable<T>;
  getById<T>(entityId: number): Observable<T>;
  post<T>(payload: T): Observable<T>;
  put<T>(payload: T): Observable<T>;
  delete<T>(payload: T): Observable<T>;
}

export class BaseApiClass implements IBaseApi {
  readonly _urn: string;

  readonly _model: string;

  readonly _entityName: string;

  readonly _httpHeaders: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'X-API-KEY': environment.API_KEY,
  });

  constructor(
    protected http: HttpClient,
    urn: string,
    model: string,
    entityName: string
  ) {
    this._urn = urn;
    this._model = model;
    this._entityName = entityName;
  }

  public get<T>(query?: string): Observable<T> {
    const queries: string = query ? query : '';

    return this.http.get<T>(
      `${environment.API_BASE_URL}/` + this._urn + queries,
      {
        headers: this._httpHeaders,
      }
    );
  }

  public getById<T>(enityId: number): Observable<T> {
    return this.http.get<T>(
      `${environment.API_BASE_URL}/${enityId}/${this._urn}`,
      {
        headers: this._httpHeaders,
      }
    );
  }

  /**
   * @ignore
   */
  public post<T>(payload: T): Observable<T> {
    return of();
  }

  /**
   * @ignore
   */
  public put<T>(payload: T): Observable<T> {
    return of();
  }

  /**
   * @ignore
   */
  public delete<T>(payload: T): Observable<T> {
    return of();
  }
}
