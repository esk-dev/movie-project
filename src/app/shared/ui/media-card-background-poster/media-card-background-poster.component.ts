import { trigger, transition, style, animate } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'media-card-background-poster',
  templateUrl: './media-card-background-poster.component.html',
  styleUrls: ['./media-card-background-poster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.25s ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.25s ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class MediaCardBackgroundPosterComponent {
  @Input() posterUrl: string = null;

  public showContent$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  @HostListener('mouseenter')
  onMouseEnter() {
    this.showContent$.next(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.showContent$.next(false);
  }
}
