import { trigger, transition, style, animate } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITopFilm } from 'src/app/core/old-models/top.interface';

@Component({
  selector: 'shared-title-poster',
  templateUrl: './shared-title-poster.component.html',
  styleUrls: ['./shared-title-poster.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.25s 0.1s ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.25s ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedTitlePosterComponent {
  @Input() categoryItem!: ITopFilm;

  @Output() handleClick = new EventEmitter();

  public canShowContent$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  @HostListener('mouseenter')
  onMouseEnter() {
    this.canShowContent$.next(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.canShowContent$.next(false);
  }

  onCLick() {
    this.handleClick.emit();
  }
}
