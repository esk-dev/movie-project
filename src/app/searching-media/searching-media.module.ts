import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchingMediaRoutingModule } from './searching-media-routing.module';
import { SearchingComponent } from './searching/searching.component';
import { ResultsComponent } from './components/results/results.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SearchingComponent, ResultsComponent],
  imports: [CommonModule, SearchingMediaRoutingModule, SharedModule],
  exports: [],
  providers: [],
})
export class SearchingMediaModule {}
