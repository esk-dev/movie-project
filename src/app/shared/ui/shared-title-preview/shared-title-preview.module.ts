import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTitlePreviewCoverComponent } from './shared-title-preview-cover/shared-title-preview-cover.component';
import { SharedRatingViewModule } from '../shared-rating-view/shared-rating-view.module';
@NgModule({
  declarations: [SharedTitlePreviewCoverComponent],
  imports: [CommonModule, SharedRatingViewModule],
  exports: [SharedTitlePreviewCoverComponent],
})
export class SharedTitlePreviewModule {}
