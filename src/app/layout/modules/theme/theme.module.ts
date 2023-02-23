import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ThemeToggleComponent],
  imports: [CommonModule, FontAwesomeModule, MatButtonModule],
  exports: [ThemeToggleComponent],
})
export class ThemeModule {}
