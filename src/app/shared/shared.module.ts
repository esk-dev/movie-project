import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCarouselModule } from './ui/shared-carousel/shared-carousel.module';
import { ItemPosterModule } from './ui/item-poster/item-poster.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, SharedCarouselModule, ItemPosterModule],
  exports: [CommonModule, SharedCarouselModule, ItemPosterModule],
})
export class SharedModule {}
