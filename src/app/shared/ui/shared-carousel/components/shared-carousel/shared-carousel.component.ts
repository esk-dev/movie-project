import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import {
  faArrowLeft,
  faArrowRight,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-shared-carousel',
  templateUrl: './shared-carousel.component.html',
  styleUrls: ['./shared-carousel.component.scss'],
})
export class SharedCarouselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sliderRef') sliderRef!: ElementRef<HTMLElement>;

  public faArrowRight: IconDefinition = faArrowRight;

  public faArrowLeft: IconDefinition = faArrowLeft;

  slider: KeenSliderInstance = {} as KeenSliderInstance;

  currentSlide: number = 0;

  initialSlide: number = 0;

  onHover() {
    console.log(this.slider.track);
  }

  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement, {
      // breakpoints: {
      //   '(max-width: 768px)': {
      //     slides: { perView: 3, spacing: 10 },
      //   },
      // },
      initial: this.initialSlide,
      slides: {
        perView: 5,
        spacing: 15,
      },
    });

    this.slider.on('slideChanged', (e) => {
      console.log(e);
      this.currentSlide = e.track.details.abs;
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }

  public onClick() {
    console.log('CLICK');
  }
}
