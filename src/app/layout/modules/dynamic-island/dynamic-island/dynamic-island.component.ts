import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, BehaviorSubject, tap, Subject, takeUntil } from 'rxjs';
import { RoutesService } from '../../../services/routes.service';
import { Link } from '../../../interfaces/link.interface';
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

  public expanded$ = this.isExpand.asObservable();

  private destroy$: Subject<boolean> = new Subject<boolean>();

  public show$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  get canShow(): boolean {
    return this.show$.getValue();
  }

  private visibleState$: BehaviorSubject<string> = new BehaviorSubject('close');

  get animationTrigger(): string {
    return this.visibleState$.getValue();
  }

  public links: Observable<Link[]> = this.routesLinks.links$;

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

  constructor(private readonly routesLinks: RoutesService) {}
}
