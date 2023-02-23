import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

interface Link {
  path: string;
  name: string;
}

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input() link!: Link;
}
