import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedCarouselComponent } from './components/shared-carousel/shared-carousel.component';
@NgModule({
  declarations: [SharedCarouselComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [SharedCarouselComponent],
  providers: [],
})
export class SharedCarouselModule {}
