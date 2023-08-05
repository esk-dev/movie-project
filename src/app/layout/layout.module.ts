import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ThemeModule } from './modules';
import { HeaderModule } from './modules';
import { DynamicIslandModule } from './modules';
import { LinkModule } from './modules';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    HeaderModule,
    DynamicIslandModule,
    LinkModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
