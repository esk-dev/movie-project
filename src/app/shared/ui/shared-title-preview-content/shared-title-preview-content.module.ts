import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTitlePreviewContentComponent } from './shared-title-preview-content/shared-title-preview-content.component';
import { SharedRatingViewModule } from '../shared-rating-view/shared-rating-view.module';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [SharedTitlePreviewContentComponent],
  imports: [CommonModule, SharedRatingViewModule, MatButtonModule],
  exports: [SharedTitlePreviewContentComponent],
})
export class SharedTitlePreviewContentModule {}
