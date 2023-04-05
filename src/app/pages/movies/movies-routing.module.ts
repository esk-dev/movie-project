import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { TitleComponent } from './pages/title/title.component';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  {
    path: 'title/:titleId',
    component: TitleComponent,
  },
  {
    path: 'category/:categoryType',
    component: CategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
