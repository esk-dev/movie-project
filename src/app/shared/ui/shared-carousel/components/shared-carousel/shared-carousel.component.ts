import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgxGlideComponent } from 'ngx-glide';

type Type = 'carousel' | 'slider';
@Component({
  selector: 'shared-carousel',
  templateUrl: './shared-carousel.component.html',
  styleUrls: ['./shared-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedCarouselComponent implements OnChanges, AfterViewInit {
  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;

  @Input() slideView!: TemplateRef<any>;

  @Input() slideData!: any[];

  @Input() focusAt: number = 0.14;

  @Input() isAutoplay: boolean = false;

  @Input() isCenter: boolean = false;

  @Input() showBullets: boolean = false;

  @Input() type: Type = 'slider';

  @Input() perView: number = 5;

  @Input() gap: number = 10;

  @Input() autoplay: number | boolean = false;

  @Input() rewind: boolean = true;

  @Input() hoverpause: boolean = false;

  @Input() showCustomArrows: boolean = true;

  @Input() showArrows: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngAfterViewInit(): void {
    this.recreate();
  }

  recreate(): void {
    if (this.ngxGlide) {
      this.ngxGlide.recreate();
    }
  }

  runEnded(data: any): void {
    console.log(data);
  }
}
