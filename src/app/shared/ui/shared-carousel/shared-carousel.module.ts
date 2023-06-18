import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGlideModule } from 'ngx-glide';
import { SharedCarouselComponent } from './components/shared-carousel/shared-carousel.component';
@NgModule({
  declarations: [SharedCarouselComponent],
  imports: [CommonModule, NgxGlideModule],
  exports: [SharedCarouselComponent],
  providers: [],
})
export class SharedCarouselModule {}
