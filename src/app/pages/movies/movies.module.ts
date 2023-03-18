import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './pages/categories/categories.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { LinkModule } from './../../layout/modules/link/link.module';
@NgModule({
  declarations: [CategoriesComponent],
  imports: [CommonModule, MoviesRoutingModule, SharedModule, LinkModule],
})
export class MoviesModule {}
