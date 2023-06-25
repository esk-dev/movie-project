import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModalModule } from './shared-modal/shared-modal.module';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { BackgroundContentDirective } from './directives/background-content/background-content.directive';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModalModule,
    ReactiveFormsModule,
    SearchPanelComponent,
    BackgroundContentDirective,
  ],
  exports: [
    CommonModule,
    SharedModalModule,
    ReactiveFormsModule,
    SearchPanelComponent,
    BackgroundContentDirective,
  ],
})
export class SharedModule {}
