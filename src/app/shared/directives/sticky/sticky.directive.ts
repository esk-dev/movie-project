import {
  Directive,
  OnDestroy,
  HostBinding,
  AfterViewInit,
} from '@angular/core';
import { SafeStyle } from '@angular/platform-browser';
import {
  Direction,
  VisibilityState,
} from '@shared/animations/sticky.animation';
import {
  map,
  share,
  filter,
  Subject,
  pairwise,
  fromEvent,
  takeUntil,
  throttleTime,
  distinctUntilChanged,
} from 'rxjs';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[sticky]',
  standalone: true,
})
export class StickyDirective implements AfterViewInit, OnDestroy {
  private _stickyStyle: string = 'position: sticky; top: 0; z-index: 1;';

  private isVisible = true;

  private destroy$: Subject<void> = new Subject();

  @HostBinding('style')
  get stickyStyle(): SafeStyle {
    return this._stickyStyle;
  }

  @HostBinding('@toggleStickyAnimation')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  ngAfterViewInit(): void {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.scrollY),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const goingUp$ = scroll$.pipe(
      filter((direction) => direction === Direction.Up)
    );

    const goingDown$ = scroll$.pipe(
      filter((direction) => direction === Direction.Down)
    );

    goingUp$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => (this.isVisible = true));
    goingDown$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => (this.isVisible = false));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
