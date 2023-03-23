import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleDetailsComponent } from './components/title-details/title-details.component';
import { SharedTitlePreviewModule } from '../shared-title-preview/shared-title-preview.module';
@NgModule({
  declarations: [TitleDetailsComponent],
  imports: [CommonModule, SharedTitlePreviewModule],
  exports: [TitleDetailsComponent],
})
export class TitleDetailsModule {}
