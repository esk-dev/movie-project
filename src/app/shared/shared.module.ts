import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [CommonModule, SearchPanelComponent, ReactiveFormsModule],
  exports: [CommonModule, SearchPanelComponent, ReactiveFormsModule],
})
export class SharedModule {}
