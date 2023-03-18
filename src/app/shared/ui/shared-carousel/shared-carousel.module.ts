import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedCarouselComponent } from './components/shared-carousel/shared-carousel.component';
import { LoadingViewModule } from '../loading-view/loading-view.module';
@NgModule({
  declarations: [SharedCarouselComponent],
  imports: [CommonModule, FontAwesomeModule, LoadingViewModule],
  exports: [SharedCarouselComponent],
  providers: [],
})
export class SharedCarouselModule {}
