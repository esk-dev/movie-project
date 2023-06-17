import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IMovieInfo } from '@models/movie.interface';
import { MatButtonModule } from '@angular/material/button';
import { BookmarkComponent } from '@ui-kit/bookmark/bookmark.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModalService } from '@shared/ui/shared-modal/shared-modal.service';
import { BackgroundContentDirective } from '@shared/directives/background-content.directive';
import { MediaMetaInfoComponent } from '@ui-kit/media-meta-info/media-meta-info.component';
import { MediaDescriptionComponent } from '@ui-kit/media-description/media-description.component';
import { ChipsComponent } from '@ui-kit/chips/chips.component';

@Component({
  selector: 'media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ChipsComponent,
    MatButtonModule,
    BookmarkComponent,
    MediaMetaInfoComponent,
    MatProgressSpinnerModule,
    MediaDescriptionComponent,
    BackgroundContentDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaDetailsComponent {
  public mediaInfo$: Observable<IMovieInfo> =
    this.sharedModalService.dataFromModal$;

  constructor(private sharedModalService: SharedModalService) {}
}
