import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedCarouselModule } from './ui/shared-carousel/shared-carousel.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, SharedCarouselModule],
  exports: [CommonModule, SharedCarouselModule],
})
export class SharedModule {}
