import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCarouselModule } from './ui/shared-carousel/shared-carousel.module';
import { SharedTitlePosterModule } from './ui/shared-title-poster/shared-title-poster.module';
import { LoadingViewModule } from './ui/loading-view/loading-view.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedTitlePreviewModule } from './ui/shared-title-preview/shared-title-preview.module';
import { SharedRatingViewModule } from './ui/shared-rating-view/shared-rating-view.module';
import { SharedModalModule } from './ui/shared-modal/shared-modal.module';
import { TitleDetailsModule } from './ui/title-details/title-details.module';
import { SharedTitlePreviewContentModule } from './ui/shared-title-preview-content/shared-title-preview-content.module';
import { SharedButtonModule } from './ui/shared-button/shared-button.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedCarouselModule,
    SharedTitlePosterModule,
    FontAwesomeModule,
    SharedTitlePreviewModule,
    SharedRatingViewModule,
    SharedModalModule,
    TitleDetailsModule,
    SharedTitlePreviewContentModule,
    SharedButtonModule,
  ],
  exports: [
    CommonModule,
    SharedCarouselModule,
    SharedTitlePosterModule,
    LoadingViewModule,
    SharedTitlePreviewModule,
    SharedRatingViewModule,
  ],
})
export class SharedModule {}
