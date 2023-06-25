import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './components/search/search.component';
import { UiModule } from '../ui/ui.module';
import { MatButtonModule } from '@angular/material/button';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StickyDirective } from '@shared/directives/sticky/sticky.directive';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    SharedModule,
    UiModule,
    MatButtonModule,
    NgxSkeletonLoaderModule,
    InfiniteScrollModule,
    StickyDirective,
  ],
})
export class SearchModule {}
