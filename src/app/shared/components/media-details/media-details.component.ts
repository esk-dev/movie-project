import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IMovieInfo } from '@models/movie.interface';
import { SharedModalService } from '@shared/ui/shared-modal/shared-modal.service';
import { MediaPreviewComponent } from '@ui-kit/media-preview/media-preview.component';
import { BackgroundContentDirective } from '@shared/directives/background-content.directive';

@Component({
  selector: 'media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss'],
  standalone: true,
  imports: [CommonModule, MediaPreviewComponent, BackgroundContentDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaDetailsComponent {
  public mediaInfo$: Observable<IMovieInfo> =
    this.sharedModalService.dataFromModal$;

  constructor(private sharedModalService: SharedModalService) {}
}
