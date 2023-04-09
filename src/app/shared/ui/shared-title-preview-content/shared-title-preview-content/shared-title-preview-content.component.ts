import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITitleData } from 'src/app/core/models/kinopoisk-base-api/kinopoisk-base-api.interface';

@Component({
  selector: 'shared-title-preview-content',
  templateUrl: './shared-title-preview-content.component.html',
  styleUrls: ['./shared-title-preview-content.component.scss'],
})
export class SharedTitlePreviewContentComponent {
  @Input() public titleData!: ITitleData;

  @Input()
  set fullDescription(value: boolean) {
    this.isReadMore.next(value);
    this.isFullDescription = value;
  }

  public isFullDescription!: boolean;

  public isReadMore: BehaviorSubject<boolean> = new BehaviorSubject(
    this.isFullDescription
  );

  public showText(): void {
    this.isReadMore.next(!this.isReadMore.value);
  }
}
