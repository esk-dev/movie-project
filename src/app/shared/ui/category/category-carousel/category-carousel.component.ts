import { Component, Input } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { ITopItem } from 'src/app/models';
import {
  faArrowRight,
  faArrowLeft,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { BreakpointsService } from 'src/app/layout/services/breakpoints.service';
import { Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-category-carousel',
  templateUrl: './category-carousel.component.html',
  styleUrls: ['./category-carousel.component.scss'],
})
export class CategoryCarouselComponent {
  @Input() categoryItems!: Observable<ITopItem[]>;

  public faArrowRight: IconDefinition = faArrowRight;

  public faArrowLeft: IconDefinition = faArrowLeft;

  constructor(private readonly breakpointsService: BreakpointsService) {}

  public readonly platformType: Observable<string> =
    this.breakpointsService.layoutType$;

  public readonly breakPoints = Breakpoints;

  carouselOptions: OwlOptions = {
    stagePadding: 20,
    mouseDrag: false,
    autoHeight: false,
    autoWidth: true,
    margin: 10,
    loop: false,
    navSpeed: 200,
    autoplayHoverPause: true,
    dots: false,
    slideBy: 'page',
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      740: {
        items: 3,
      },
      940: {
        items: 7,
      },
    },
    nav: false,
  };

  isFirstSlide!: number | undefined;

  getPassedData(data: SlidesOutputData) {
    this.isFirstSlide = data.startPosition;
  }
}
