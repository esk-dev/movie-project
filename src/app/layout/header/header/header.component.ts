import { ChangeDetectionStrategy, Component } from '@angular/core';
interface Link {
  path: string;
  name: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public links: Link[] = [
    { path: `/`, name: 'default' },
    { path: '/', name: 'default 2' },
    { path: '/', name: 'default 3' },
    { path: '/', name: 'default 4' },
  ];
}
