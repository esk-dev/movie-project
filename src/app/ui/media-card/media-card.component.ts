import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MediaCardBackgroundPosterComponent } from '../media-card-background-poster/media-card-background-poster.component';

import { IMovieResult } from 'src/app/core/models/models.interface';

@Component({
  selector: 'ui-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MediaCardBackgroundPosterComponent],
})
export class MediaCardComponent {
  @Input() public mediaResult!: IMovieResult;
}
