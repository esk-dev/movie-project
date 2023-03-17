import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { TitleComponent } from './pages/title/title.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  {
    path: 'title/:titleId',
    component: TitleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
