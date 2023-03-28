import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ITitleData } from 'src/app/models/kinopoisk-base-api/kinopoisk-base-api.interface';

type Page = 'fullPage' | 'smallPage' | 'modal';
@Component({
  selector: 'shared-title-preview-cover',
  templateUrl: './shared-title-preview-cover.component.html',
  styleUrls: ['./shared-title-preview-cover.component.scss'],
})
export class SharedTitlePreviewCoverComponent {
  @Input() public titleData!: ITitleData;

  @Input() public typeOfPage: Page = 'fullPage';

  @Input() public externalContent!: TemplateRef<any>;
}
