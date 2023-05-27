import { InjectionToken } from '@angular/core';

export const FLIXHQ_API_URL = new InjectionToken<string>('FLIXHQ_API_URL', {
  factory: () => 'http://localhost:3000/movies/flixhq',
});

export const TMDB_API_URL = new InjectionToken<string>('TMDB_API_URL', {
  factory: () => 'https://api.consumet.org/meta/tmdb',
});
