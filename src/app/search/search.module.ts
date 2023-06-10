import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './components/search/search.component';
import { UiModule } from '../ui/ui.module';
import { MatButtonModule } from '@angular/material/button';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    UiModule,
    MatButtonModule,
    // FormsModule,
    // ReactiveFormsModule,
  ],
})
export class SearchModule {}
