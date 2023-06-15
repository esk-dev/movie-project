import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MediaCardComponent } from './media-card/media-card.component';
import { BackgroundComponent } from './background/background.component';
import { LoadingViewComponent } from './loading-view/loading-view.component';
import { MediaPreviewComponent } from './media-preview/media-preview.component';
import { MediaMetaInfoComponent } from './media-meta-info/media-meta-info.component';
import { MediaDescriptionComponent } from './media-description/media-description.component';
import { MediaCardBackgroundPosterComponent } from './media-card/media-card-background-poster/media-card-background-poster.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MediaCardComponent,
    BackgroundComponent,
    LoadingViewComponent,
    MediaPreviewComponent,
    MediaMetaInfoComponent,
    MediaDescriptionComponent,
    MediaCardBackgroundPosterComponent,
  ],
  exports: [
    MediaCardComponent,
    BackgroundComponent,
    MediaPreviewComponent,
    MediaMetaInfoComponent,
    MediaDescriptionComponent,
    MediaCardBackgroundPosterComponent,
  ],
})
export class UiModule {}
