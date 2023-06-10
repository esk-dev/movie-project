import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core';
import { IMovieInfo } from 'src/app/core/models/models.interface';

type Page = 'fullPage' | 'smallPage' | 'modal';

@Component({
  selector: 'background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundComponent {
  @Input() public mediaData!: IMovieInfo;

  @Input() public typeOfPage: Page = 'fullPage';

  @Input() public externalContent!: TemplateRef<any>;
}
