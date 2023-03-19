import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  SimpleChanges,
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
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;

  @Output() public lastSlideEvent = new EventEmitter<void>();

  @Input() public slidesPerView: PerView[] = [];

  public faArrowRight: IconDefinition = faArrowRight;

  public faArrowLeft: IconDefinition = faArrowLeft;

  public slider: KeenSliderInstance = {} as KeenSliderInstance;

  public currentSlide: number = 0;

  public initialSlide: number = 1;

  public isLoad: boolean = false;

  public ngAfterViewInit(): void {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      renderMode: 'performance',
      initial: this.initialSlide,
      slides: {
        perView: this.slidesPerView[0],
        spacing: 2,
      },
      breakpoints: {
        '(min-width: 768px)': {
          renderMode: 'performance',
          slides: {
            origin: 0.025,
            perView: this.slidesPerView[1],
            spacing: 5,
          },
          mode: 'free-snap',
        },
        '(min-width: 1024px)': {
          renderMode: 'performance',
          slides: {
            origin: 0.025,
            perView: this.slidesPerView[2],
            spacing: 5,
          },
          mode: 'free-snap',
        },
      },
      slideChanged: (e) => {
        this.currentSlide = e.track.details.abs;
      },
      animationEnded: (e) => {
        this.handleEndOfSLider(e);
      },
    });
  }

  public ngAfterViewChecked(): void {
    if (this.slider && !this.slider.slides.length) {
      this.slider.update();
    }
  }

  public ngOnDestroy() {
    this.slider.destroy();
  }

  private handleEndOfSLider(e: KeenSliderInstance): void {
    const lastIdx = e.track.details.maxIdx;
    const currIdx = e.track.details.abs;
    const distance = lastIdx - currIdx;
    if (distance <= this.slidesPerView[2]) {
      this.lastSlideEvent.emit();
      this.slider.update();
    }
  }
}
