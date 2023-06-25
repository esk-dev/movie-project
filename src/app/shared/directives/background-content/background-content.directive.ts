import {
  Input,
  OnInit,
  Directive,
  ElementRef,
  HostBinding,
} from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[backgroundContent]',
  standalone: true,
})
export class BackgroundContentDirective implements OnInit {
  @Input() contentUrl: string;

  @Input() minHeight: string;

  @HostBinding('style.background') private background: string;

  @HostBinding('style.min-height') private _minHeight: string;

  @HostBinding('style.position') position: string = 'relative';

  @HostBinding('style.box-shadow') boxShadow: string =
    'inset 0px -30px 20px -10px var(--mdc-dialog-container-color)';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.background =
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(55,55,55,0.7) 70%, rgba(0,0,0,0.9) 100%), no-repeat center/100% url(' +
      this.contentUrl +
      ')';

    this._minHeight = this.minHeight ?? '50%';
  }
}
