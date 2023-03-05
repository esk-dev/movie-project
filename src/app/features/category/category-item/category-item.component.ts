import { transition, trigger, style, animate } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITopItem } from 'src/app/models/index';

@Component({
  selector: 'category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.25s 0.1s ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.25s 0.1s ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryItemComponent {
  @Input() categoryItem!: ITopItem;

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
}
