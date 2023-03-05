import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CategoryComponent } from './category/category.component';
import { CategoryItemComponent } from './category-item/category-item.component';
import { CategoryContainerComponent } from './category-container/category-container.component';
import { CategoryCarouselComponent } from './category-carousel/category-carousel.component';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryItemComponent,
    CategoryContainerComponent,
    CategoryCarouselComponent,
  ],
  imports: [CommonModule, CarouselModule],
  exports: [CategoryComponent],
})
export class CategoryModule {}
