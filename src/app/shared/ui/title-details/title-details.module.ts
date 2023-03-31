import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleDetailsComponent } from './components/title-details/title-details.component';
import { SharedTitlePreviewModule } from '../shared-title-preview/shared-title-preview.module';
import { SharedTitlePreviewContentModule } from '../shared-title-preview-content/shared-title-preview-content.module';
import { SharedRatingViewModule } from '../shared-rating-view/shared-rating-view.module';
import { MatButtonModule } from '@angular/material/button';
import { SharedButtonModule } from '../shared-button/shared-button.module';
@NgModule({
  declarations: [TitleDetailsComponent],
  imports: [
    CommonModule,
    SharedTitlePreviewModule,
    SharedTitlePreviewContentModule,
    SharedRatingViewModule,
    MatButtonModule,
    SharedButtonModule,
  ],
  exports: [TitleDetailsComponent],
})
export class TitleDetailsModule {}
