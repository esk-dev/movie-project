import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ThemeModule } from './modules';
import { HeaderModule } from './modules';
import { DynamicIslandModule } from './modules';
import { SearchBarModule } from 'src/app/features/search-bar/search-bar.module';
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ThemeModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    HeaderModule,
    DynamicIslandModule,
    SearchBarModule,
  ],
  exports: [MainComponent],
})
export class LayoutModule {}
