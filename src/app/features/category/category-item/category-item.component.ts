import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITopItem } from 'src/app/models/index';

@Component({
  selector: 'category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryItemComponent {
  @Input() categoryItem!: ITopItem;
}
