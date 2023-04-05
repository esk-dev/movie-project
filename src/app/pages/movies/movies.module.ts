import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from './../../shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { LinkModule } from './../../layout/modules/link/link.module';
import { CategoryComponent } from './pages/category/category.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SharedTitlePreviewContentModule } from 'src/app/shared/ui/shared-title-preview-content/shared-title-preview-content.module';
@NgModule({
  declarations: [CategoriesComponent, CategoryComponent],
  imports: [
    LinkModule,
    SharedModule,
    CommonModule,
    MatButtonModule,
    MoviesRoutingModule,
    SharedTitlePreviewContentModule,
  ],
})
export class MoviesModule {}
