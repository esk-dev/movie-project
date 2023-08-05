import { CommonModule } from '@angular/common';
import { NgxGlideModule } from 'ngx-glide';
import { NgxGlideComponent } from 'ngx-glide';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

export interface CarouselProps {
  arrows: boolean;
  bullets: boolean;
  perView: number;
  autoplayTiming: number;
  gap?: number;
  type?: string;
  peek?: number;
}

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [CommonModule, NgxGlideModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  @ViewChild('ngxGlide') ngxGlide!: NgxGlideComponent;

  @Input() width: string = '100%';

  @Input() height: string = '400px';

  @Input() carouselProps: CarouselProps = {
    arrows: true,
    bullets: true,
    perView: 3,
    autoplayTiming: 0,
    gap: 10,
    type: 'carousel',
    peek: 0,
  };

  @Input() slideData: any[];

  @Input() slideView: TemplateRef<any>;

  recreate(): void {
    if (this.ngxGlide) {
      this.ngxGlide.recreate();
    }
  }
}
