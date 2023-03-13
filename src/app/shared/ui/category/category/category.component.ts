import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITopItem } from 'src/app/models/index';
import { Observable } from 'rxjs';
@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  @Input() categoryItems!: Observable<ITopItem[]>;

  @Input() title!: string;
}
