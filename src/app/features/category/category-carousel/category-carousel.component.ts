import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable } from 'rxjs';
import { ITopItem } from 'src/app/models';
@Component({
  selector: 'app-category-carousel',
  templateUrl: './category-carousel.component.html',
  styleUrls: ['./category-carousel.component.scss'],
})
export class CategoryCarouselComponent {
  @Input() categoryItems!: Observable<ITopItem[]>;

  carouselOptions: OwlOptions = {
    stagePadding: 20,
    mouseDrag: false,
    autoWidth: true,
    margin: 20,
    loop: false,
    navSpeed: 700,
    autoplayHoverPause: true,
    dots: false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      740: {
        items: 5,
      },
      940: {
        items: 7,
      },
    },
    nav: true,
  };
}
