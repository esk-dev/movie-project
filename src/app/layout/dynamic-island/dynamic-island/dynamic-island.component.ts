import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { RoutesService } from '../../services/routes.service';
import { Link } from '../../interfaces/link.interface';
import { openCloseAnimtaion, fadeAnimation } from '../animations';
import { faFilm, faHomeAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dynamic-island',
  templateUrl: './dynamic-island.component.html',
  styleUrls: ['./dynamic-island.component.scss'],
  animations: [openCloseAnimtaion, fadeAnimation],
})
export class DynamicIslandComponent {
  public expanded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public show: Observable<boolean> = this.expanded.asObservable();

  public faFilm = faFilm;

  public faHomeAlt = faHomeAlt;

  constructor(private readonly routesLinks: RoutesService) {}

  public links: Observable<Link[]> = this.routesLinks.links$;
  // get linkIcon() {

  // }
  get stateVisible(): string {
    switch (this.expanded.getValue()) {
      case true:
        return 'open';
        break;

      case false:
        return 'close';
        break;
    }
  }

  toggle(): void {
    this.expanded.next(!this.expanded.getValue());
  }
}
