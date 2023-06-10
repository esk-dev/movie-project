import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { RatingColorDirective } from './rating-color.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'media-meta-info',
  templateUrl: './media-meta-info.component.html',
  styleUrls: ['./media-meta-info.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RatingColorDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaMetaInfoComponent {
  @Input()
  public rating!: number;

  @Input()
  public duration!: string;

  @Input()
  public releaseDate!: string;

  @Input()
  public totalEpisodes!: number;
}
