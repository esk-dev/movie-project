import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCarouselModule } from './ui/shared-carousel/shared-carousel.module';
import { ItemPosterModule } from './ui/item-poster/item-poster.module';
import { LoadingViewModule } from './ui/loading-view/loading-view.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedTitlePreviewModule } from './ui/shared-title-preview/shared-title-preview.module';
import { SharedRatingViewModule } from './ui/shared-rating-view/shared-rating-view.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedCarouselModule,
    ItemPosterModule,
    FontAwesomeModule,
    SharedTitlePreviewModule,
    SharedRatingViewModule,
  ],
  exports: [
    CommonModule,
    SharedCarouselModule,
    ItemPosterModule,
    LoadingViewModule,
    SharedTitlePreviewModule,
  ],
})
export class SharedModule {}
