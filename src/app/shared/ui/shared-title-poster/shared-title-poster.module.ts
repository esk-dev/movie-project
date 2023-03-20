import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedTitlePosterComponent } from './components/shared-title-poster/shared-title-poster.component';

@NgModule({
  declarations: [SharedTitlePosterComponent],
  imports: [CommonModule],
  exports: [SharedTitlePosterComponent],
  providers: [],
})
export class SharedTitlePosterModule {}
