import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaDetailsComponent {}
