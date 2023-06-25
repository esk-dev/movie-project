import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { IMovieInfo } from '@models/movie.interface';
import { ChipsComponent } from '@ui-kit/chips/chips.component';
import { BookmarkComponent } from '@ui-kit/bookmark/bookmark.component';
import { SharedModalService } from '@shared/shared-modal/shared-modal.service';
import { MediaMetaInfoComponent } from '@ui-kit/media-meta-info/media-meta-info.component';
import { MediaDescriptionComponent } from '@ui-kit/media-description/media-description.component';
import { BackgroundContentDirective } from '@shared/directives/background-content/background-content.directive';
import { inOutAnimation } from '@shared/animations/fade-in-out.animation';

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
  animations: [inOutAnimation],
})
export class MediaDetailsComponent {
  public mediaInfo$: Observable<IMovieInfo> =
    this.sharedModalService.dataFromModal$;

  constructor(private sharedModalService: SharedModalService) {}
}
