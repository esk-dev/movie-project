import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleDetailsComponent } from './components/title-details/title-details.component';
import { SharedTitlePreviewModule } from '../shared-title-preview/shared-title-preview.module';
import { SharedTitlePreviewContentModule } from '../shared-title-preview-content/shared-title-preview-content.module';
@NgModule({
  declarations: [TitleDetailsComponent],
  imports: [
    CommonModule,
    SharedTitlePreviewModule,
    SharedTitlePreviewContentModule,
  ],
  exports: [TitleDetailsComponent],
})
export class TitleDetailsModule {}
