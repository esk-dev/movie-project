import { Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutesService } from '../../../services/routes.service';
import { Link } from '../../../interfaces/link.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private readonly routesLinks: RoutesService) {}

  public links: Observable<Link[]> = this.routesLinks.links$;

  readonly breakpoints = Breakpoints;

  @Input() public platformType$!: Observable<string>;
}
