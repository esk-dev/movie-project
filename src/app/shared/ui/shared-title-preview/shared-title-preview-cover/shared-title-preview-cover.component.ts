import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { ITitleData } from 'src/app/core/old-models/kinopoisk-base-api/kinopoisk-base-api.interface';

type Page = 'fullPage' | 'smallPage' | 'modal';
@Component({
  selector: 'shared-title-preview-cover',
  templateUrl: './shared-title-preview-cover.component.html',
  styleUrls: ['./shared-title-preview-cover.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class SharedTitlePreviewCoverComponent {
  @Input() public titleData!: ITitleData;

  @Input() public typeOfPage: Page = 'fullPage';

  @Input() public externalContent!: TemplateRef<any>;
}
