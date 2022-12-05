import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [ThemeToggleComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatButtonModule,
  ],
  exports: [ThemeToggleComponent],
})
export class ThemeModule {}
