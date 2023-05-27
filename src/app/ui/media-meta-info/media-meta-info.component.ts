import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RatingColorDirective } from './rating-color.directive';

@Component({
  selector: 'ui-media-meta-info',
  templateUrl: './media-meta-info.component.html',
  styleUrls: ['./media-meta-info.component.scss'],
  standalone: true,
  imports: [RatingColorDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaMetaInfoComponent {
  @Input()
  public rating!: number;

  @Input()
  public duration!: number;

  @Input()
  public releaseDate!: number;

  @Input()
  public totalEpisodes!: number;
}
