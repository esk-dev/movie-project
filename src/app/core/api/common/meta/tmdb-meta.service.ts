import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseMetaApiClass } from '../../base-meta-api.class';

@Injectable({
  providedIn: 'root',
})
export class TmdbMetaService extends BaseMetaApiClass {
  constructor(http: HttpClient) {
    super(http, 'tmdb');
  }
}
