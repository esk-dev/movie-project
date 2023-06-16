import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModalModule } from './ui/shared-modal/shared-modal.module';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModalModule,
    ReactiveFormsModule,
    SearchPanelComponent,
  ],
  exports: [CommonModule, ReactiveFormsModule, SearchPanelComponent],
})
export class SharedModule {}
