import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ThemeModule } from './theme/theme.module';
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [MainComponent],
})
export class LayoutModule {}
