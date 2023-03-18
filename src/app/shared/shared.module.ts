import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCarouselModule } from './ui/shared-carousel/shared-carousel.module';
import { ItemPosterModule } from './ui/item-poster/item-poster.module';
import { LoadingViewModule } from './ui/loading-view/loading-view.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedCarouselModule,
    ItemPosterModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    SharedCarouselModule,
    ItemPosterModule,
    LoadingViewModule,
  ],
})
export class SharedModule {}
