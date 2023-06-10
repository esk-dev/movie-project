import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MediaCardBackgroundPosterComponent } from './media-card-background-poster/media-card-background-poster.component';

import { IMovieResult } from 'src/app/core/models/models.interface';

@Component({
  selector: 'media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
  standalone: true,
  imports: [CommonModule, MediaCardBackgroundPosterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaCardComponent {
  @Input() public mediaResult!: IMovieResult;

  @Output() toMediaDetails: EventEmitter<IMovieResult> = new EventEmitter();

  public onClick(media: IMovieResult): void {
    this.toMediaDetails.emit(media);
  }
}
