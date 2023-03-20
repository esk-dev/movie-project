import { Component, Input } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ITitleData } from 'src/app/models/kinopoisk-base-api/kinopoisk-base-api.interface';
import { SharedModalService } from '../../shared-modal/shared-modal.service';

@Component({
  selector: 'shared-title-preview-cover',
  templateUrl: './shared-title-preview-cover.component.html',
  styleUrls: ['./shared-title-preview-cover.component.scss'],
})
export class SharedTitlePreviewCoverComponent {
  @Input() public titleData!: Observable<ITitleData>;

  constructor(private sharedModalService: SharedModalService) {}

  private component$ = from(
    import(
      '../../title-details/components/title-details/title-details.component'
    ).then((component) => component.TitleDetailsComponent)
  );

  public openTitleDetails() {
    this.sharedModalService.showModal(this.component$, this.titleData);
  }
}
