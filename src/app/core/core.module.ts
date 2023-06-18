import { BehaviorSubject } from 'rxjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PROJECT_EFFECTS } from './store/project-effects';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';

import { PROVIDER_TOKEN, Providers } from './tokens/tokens';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AkitaNgDevtools.forRoot({ maxAge: 15 }),
    AkitaNgEffectsModule.forRoot(PROJECT_EFFECTS),
  ],
  providers: [
    {
      provide: PROVIDER_TOKEN,
      useValue: new BehaviorSubject<Providers>('FLIXHQ'),
    },
  ],
})
export class CoreModule {}
