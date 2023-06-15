import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IMovieInfo } from '@models/movie.interface';
import { MediaMetaInfoComponent } from '../media-meta-info/media-meta-info.component';
import { MediaDescriptionComponent } from '../media-description/media-description.component';

@Component({
  selector: 'media-preview',
  templateUrl: './media-preview.component.html',
  styleUrls: ['./media-preview.component.scss'],
  standalone: true,
  imports: [CommonModule, MediaDescriptionComponent, MediaMetaInfoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaPreviewComponent {
  @Input()
  public mediaResult!: IMovieInfo;
}
