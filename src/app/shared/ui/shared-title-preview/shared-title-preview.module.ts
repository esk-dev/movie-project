import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTitlePreviewPosterComponent } from './shared-title-preview-poster/shared-title-preview-poster.component';
import { SharedRatingViewModule } from '../shared-rating-view/shared-rating-view.module';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [SharedTitlePreviewPosterComponent],
  imports: [CommonModule, MatButtonModule, SharedRatingViewModule],
  exports: [SharedTitlePreviewPosterComponent],
})
export class SharedTitlePreviewModule {}
