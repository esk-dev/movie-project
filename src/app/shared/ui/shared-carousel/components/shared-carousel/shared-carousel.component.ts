import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  faArrowLeft,
  faArrowRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

type PerView = number | 'auto';
@Component({
  selector: 'app-shared-carousel',
  templateUrl: './shared-carousel.component.html',
  styleUrls: ['./shared-carousel.component.scss'],
})
export class SharedCarouselComponent
  implements AfterViewInit, AfterViewChecked, OnDestroy
{
  // @Output() handleClick = new EventEmitter<any>();

  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;

  @Input() public slidesPerView: PerView[] = [];

  public faArrowRight: IconDefinition = faArrowRight;

  public faArrowLeft: IconDefinition = faArrowLeft;

  slider: KeenSliderInstance = {} as KeenSliderInstance;

  currentSlide: number = 0;

  initialSlide: number = 1;

  ngAfterViewInit(): void {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      breakpoints: {
        '(min-width: 0px and max-width: 768px)': {
          slides: {
            perView: this.slidesPerView[0],
            spacing: 0,
          },
          mode: 'free-snap',
        },
        '(min-width: 769px and max-width: 1024px)': {
          slides: {
            perView: this.slidesPerView[1],
            spacing: 2,
          },
          mode: 'free-snap',
        },
      },
      initial: this.initialSlide,
      slides: {
        perView: this.slidesPerView[2],
        spacing: 2,
      },
    });

    this.slider.on('slideChanged', (e) => {
      this.currentSlide = e.track.details.abs;
    });
  }

  ngAfterViewChecked(): void {
    if (this.slider && !this.slider.slides.length) {
      this.slider.update();
    }
  }

  ngOnDestroy() {
    this.slider.destroy();
  }
}
