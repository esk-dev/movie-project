import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { ITopItem } from 'src/app/models/index';
import { Observable } from 'rxjs';
import { BreakpointsService } from 'src/app/layout/services/breakpoints.service';
@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
  @Input() categoryItems!: Observable<ITopItem[]>;

  @Input() title!: string;

  constructor(private readonly breakpointsService: BreakpointsService) {}

  public readonly platformType: Observable<string> =
    this.breakpointsService.layoutType$;

  public readonly breakPoints = Breakpoints;
}
