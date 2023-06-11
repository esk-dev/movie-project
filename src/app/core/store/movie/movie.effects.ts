import { Injectable } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';

@Injectable({
  providedIn: 'root',
})
export class MovieEffects {
  constructor(private actions$: Actions) {}
}
