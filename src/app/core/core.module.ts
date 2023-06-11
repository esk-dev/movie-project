import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PROJECT_EFFECTS } from './store/project-effects';

import { BehaviorSubject } from 'rxjs';
import { PROVIDER_TOKEN, Providers } from './tokens/tokens';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AkitaNgDevtools.forRoot({ maxAge: 25 }),
    AkitaNgEffectsModule.forRoot(PROJECT_EFFECTS),
  ],
  providers: [
    {
      provide: PROVIDER_TOKEN,
      useValue: new BehaviorSubject<Providers>('TMDB'),
    },
  ],
})
export class CoreModule {}
