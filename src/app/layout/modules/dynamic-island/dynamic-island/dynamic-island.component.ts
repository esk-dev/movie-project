import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { BehaviorSubject, tap, Subject, takeUntil } from 'rxjs';
import { openCloseAnimtaion } from '../animations';

@Component({
  selector: 'app-dynamic-island',
  templateUrl: './dynamic-island.component.html',
  styleUrls: ['./dynamic-island.component.scss'],
  animations: [openCloseAnimtaion],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicIslandComponent implements OnInit, OnDestroy {
  private isExpand: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private destroy$: Subject<boolean> = new Subject<boolean>();

  public expanded$ = this.isExpand.asObservable();

  public show$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  get canShow(): boolean {
    return this.show$.getValue();
  }

  private visibleState$: BehaviorSubject<string> = new BehaviorSubject('close');

  get animationTrigger(): string {
    return this.visibleState$.getValue();
  }

  public toggle(): void {
    this.isExpand.next(!this.isExpand.getValue());
  }

  ngOnInit(): void {
    this.expanded$
      .pipe(
        tap((value) =>
          value
            ? setTimeout(() => {
                this.show$.next(true);
              }, 500)
            : this.show$.next(false)
        ),
        tap((value) =>
          value
            ? this.visibleState$.next('open')
            : this.visibleState$.next('close')
        ),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
