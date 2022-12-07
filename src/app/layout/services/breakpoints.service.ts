import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { BehaviorSubject, Observable, tap } from 'rxjs';

export const LAYOUT_SHORT_TYPES_MAP = {
  [Breakpoints.Handset]: Breakpoints.Handset,
  [Breakpoints.HandsetPortrait]: Breakpoints.Handset,
  [Breakpoints.HandsetLandscape]: Breakpoints.Handset,
  [Breakpoints.Tablet]: Breakpoints.Tablet,
  [Breakpoints.TabletPortrait]: Breakpoints.Tablet,
  [Breakpoints.TabletLandscape]: Breakpoints.Tablet,
  [Breakpoints.Web]: Breakpoints.Web,
  [Breakpoints.WebPortrait]: Breakpoints.Web,
  [Breakpoints.WebLandscape]: Breakpoints.Web,
};

export const LAYOUT_TYPES = [
  Breakpoints.Handset,
  Breakpoints.Tablet,
  Breakpoints.Web,
];

@Injectable({
  providedIn: 'root',
})
export class BreakpointsService {
  private readonly layoutSubject$: BehaviorSubject<string> =
    new BehaviorSubject<string>(Breakpoints.Handset);

  public layoutType$: Observable<string> = this.layoutSubject$.asObservable();

  public snapshotLayoutType: string = this.layoutSubject$.getValue();

  constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(LAYOUT_TYPES)
      .pipe(
        tap((result: BreakpointState) => {
          let type;
          for (let query of Object.keys(result.breakpoints)) {
            if (result.breakpoints[query]) {
              type = LAYOUT_SHORT_TYPES_MAP[query];
              break;
            }
          }

          this.layoutSubject$.next(type ?? Breakpoints.Handset);
        })
      )
      .subscribe();
  }
}
