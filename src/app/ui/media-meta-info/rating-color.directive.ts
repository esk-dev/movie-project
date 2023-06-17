import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ratingColor]',
  standalone: true,
})
export class RatingColorDirective implements OnInit {
  @HostBinding('style.border-radius') borderRadius = '0.25rem';

  @HostBinding('style.padding') padding = '5px';

  @Input() rating!: number;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.checkRating(this.rating);
  }

  private checkRating(rating: number): string {
    switch (true) {
      case rating >= 7:
        return 'rgb(70, 211, 105)';
      case rating <= 7 && rating > 5:
        return 'rgb(70, 102, 211)';
      case rating <= 5:
        return 'rgb(211, 70, 70)';
      default:
        return 'grey';
    }
  }
}
