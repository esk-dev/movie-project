import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITitleData } from 'src/app/core/old-models/kinopoisk-base-api/kinopoisk-base-api.interface';
import { SharedModalService } from '../../../../shared-modal/shared-modal.service';

@Component({
  selector: 'app-title-details',
  templateUrl: './title-details.component.html',
  styleUrls: ['./title-details.component.scss'],
})
export class TitleDetailsComponent implements OnInit {
  public titleData$!: Observable<ITitleData>;

  constructor(private sharedModalService: SharedModalService) {}

  ngOnInit(): void {
    this.titleData$ = this.sharedModalService.dataFromModal$;
  }

  public onClick() {
    console.log();
  }
}
