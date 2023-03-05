import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { ContainerComponent } from './container/container.component';
import { CategoryModule } from 'src/app/features/category/category.module';

@NgModule({
  declarations: [ContainerComponent],
  imports: [CommonModule, CategoryModule, MoviesRoutingModule],
})
export class MoviesModule {}
