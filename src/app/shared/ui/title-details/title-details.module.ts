import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleDetailsComponent } from './components/title-details/title-details.component';

@NgModule({
  declarations: [TitleDetailsComponent],
  imports: [CommonModule],
  exports: [TitleDetailsComponent],
})
export class TitleDetailsModule {}
