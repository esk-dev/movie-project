import { Breakpoints } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from '@models/layout.interface';
import { ROUTES_TOKEN } from '@core/tokens/tokens';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(@Inject(ROUTES_TOKEN) private readonly routes: Link[]) {}

  public links: Link[] = this.routes;

  readonly breakpoints = Breakpoints;

  @Input() public platformType$!: Observable<string>;
}
