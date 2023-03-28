import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[ratingColor]',
})
export class RatingColorDirective implements OnInit {
  @Input() rating!: number;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.color = this.checkRating(this.rating);
  }

  private checkRating(rating: number): string {
    switch (true) {
      case rating >= 7:
        return 'green';
        break;
      case rating <= 7:
        return 'blue';
        break;
      case rating <= 5:
        return 'red';
        break;
      default:
        return 'blue';
        break;
    }
  }
}
