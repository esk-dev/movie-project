import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ITitleData } from 'src/app/models/kinopoisk-base-api/kinopoisk-base-api.interface';

type Page = 'fullPage' | 'smallPage' | 'modal';
@Component({
  selector: 'shared-title-preview-cover',
  templateUrl: './shared-title-preview-cover.component.html',
  styleUrls: ['./shared-title-preview-cover.component.scss'],
})
export class SharedTitlePreviewCoverComponent {
  @Input() public titleData!: Observable<ITitleData>;

  @Input() public withContent: boolean = true;

  @Input() public typeOfPage: Page = 'fullPage';

  @Output() private flatButtonEmit = new EventEmitter<void>();

  @Output() private strokedButtonEmit = new EventEmitter<void>();

  // private backgroundStyle!: Object;

  // public set type(v: Page) {
  //   this.typeOfPage = v;

  //   switch (v) {
  //     case 'modal':
  //       this.backgroundStyle = {
  //         'background-image':
  //           'linear-gradient(to right, rgba(48, 48, 48, 0.8) 10%, transparent 70%), linear-gradient(to right, rgba(48, 48, 48, 0.9) 1%, transparent 99%), url(' +
  //           this.titleData.coverUrl +
  //           ');',
  //       };
  //       break;
  //     case 'smallPage':
  //       break;
  //     default:
  //       break;
  //   }
  // }

  public onFlatButton() {
    this.flatButtonEmit.emit();
  }

  public onStrokedButton() {
    this.strokedButtonEmit.emit();
  }
}
