import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { CarouselComponent } from '@ui-kit/carousel/carousel.component';
import { MediaCardComponent } from '@ui-kit/media-card/media-card.component';
import { BackgroundContentDirective } from '@shared/directives/background-content/background-content.directive';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MediaCardComponent,
    CarouselComponent,
    BackgroundContentDirective,
  ],
})
export class MainModule {}
