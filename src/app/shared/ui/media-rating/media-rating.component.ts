import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-media-rating',
  templateUrl: './media-rating.component.html',
  styleUrls: ['./media-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaRatingComponent {}
