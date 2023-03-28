import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITitleData } from 'src/app/models/kinopoisk-base-api/kinopoisk-base-api.interface';

@Component({
  selector: 'shared-title-preview-content',
  templateUrl: './shared-title-preview-content.component.html',
  styleUrls: ['./shared-title-preview-content.component.scss'],
})
export class SharedTitlePreviewContentComponent {
  @Input() public titleData!: ITitleData;

  @Input() public action: boolean = true;

  @Output() private flatButtonEmit = new EventEmitter<void>();

  @Output() private strokedButtonEmit = new EventEmitter<void>();

  public onFlatButton() {
    this.flatButtonEmit.emit();
  }

  public onStrokedButton() {
    this.strokedButtonEmit.emit();
  }
}
