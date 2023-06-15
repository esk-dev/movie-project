import { InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const FLIXHQ_API_URL = new InjectionToken<string>('FLIXHQ_API_URL', {
  factory: () => 'http://localhost:3000/movies/flixhq',
});

export const TMDB_API_URL = new InjectionToken<string>('TMDB_API_URL', {
  factory: () => 'http://localhost:3000/meta/tmdb',
});

export type Providers = 'FLIXHQ' | 'TMDB';

export const PROVIDER_TOKEN = new InjectionToken<BehaviorSubject<Providers>>(
  'PROVIDER_TOKEN'
);