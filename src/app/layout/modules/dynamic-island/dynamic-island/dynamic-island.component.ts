import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { RoutesService } from '../../../services/routes.service';
import { Link } from '../../../interfaces/link.interface';
import { openCloseAnimtaion, fadeAnimation } from '../animations';

@Component({
  selector: 'app-dynamic-island',
  templateUrl: './dynamic-island.component.html',
  styleUrls: ['./dynamic-island.component.scss'],
  animations: [openCloseAnimtaion, fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicIslandComponent implements OnInit {
  @Input() expanded$!: Observable<boolean>;

  public show$!: Observable<boolean>;

  public visibleState$: BehaviorSubject<string> = new BehaviorSubject('close');

  get animationTrigger(): string {
    return this.visibleState$.getValue();
  }

  public links: Observable<Link[]> = this.routesLinks.links$;

  ngOnInit(): void {
    this.show$ = this.expanded$.pipe(
      tap((value) =>
        value
          ? this.visibleState$.next('open')
          : this.visibleState$.next('close')
      )
    );
  }

  constructor(private readonly routesLinks: RoutesService) {}
}
