import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
