import { TmdbService } from '@core/http/tmdb.service';
import { FlixHqService } from '@core/http/flix-hq.service';

import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { PROVIDER_TOKEN, Providers } from '@core/tokens/tokens';
import { Inject, Injectable, Injector, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProviderService implements OnDestroy {
  public provider: any;

  private destroy$: Subject<void> = new Subject();

  constructor(
    private injector: Injector,
    @Inject(PROVIDER_TOKEN) private providerToken: BehaviorSubject<Providers>
  ) {
    this.providerToken
      .pipe(takeUntil(this.destroy$))
      .subscribe((currentProvider: Providers) =>
        this.setProvider(currentProvider)
      );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public changeProvider(provider: Providers): void {
    this.providerToken.next(provider);
  }

  private setProvider(currentProvider: Providers) {
    switch (currentProvider) {
      case 'TMDB':
        this.provider = this.injector.get(TmdbService);
        break;
      case 'FLIXHQ':
        this.provider = this.injector.get(FlixHqService);
        break;
      default:
        throw new Error('Api provider not found');
    }
  }
}
