import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRatingViewComponent } from './shared-rating-view/shared-rating-view.component';
import { RatingColorDirective } from './rating-color.directive';
@NgModule({
  declarations: [SharedRatingViewComponent, RatingColorDirective],
  imports: [CommonModule],
  exports: [SharedRatingViewComponent],
})
export class SharedRatingViewModule {}
