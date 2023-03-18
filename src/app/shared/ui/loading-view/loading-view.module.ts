import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingViewComponent } from './loading-view.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LoadingViewComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [LoadingViewComponent],
})
export class LoadingViewModule {}
