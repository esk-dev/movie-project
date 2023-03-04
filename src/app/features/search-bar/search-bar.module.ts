import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
