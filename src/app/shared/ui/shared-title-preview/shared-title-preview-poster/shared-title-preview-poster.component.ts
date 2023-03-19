import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITitleData } from 'src/app/models/kinopoisk-base-api/kinopoisk-base-api.interface';

@Component({
  selector: 'shared-title-preview-poster',
  templateUrl: './shared-title-preview-poster.component.html',
  styleUrls: ['./shared-title-preview-poster.component.scss'],
})
export class SharedTitlePreviewPosterComponent implements OnInit {
  @Input() public titleData!: Observable<ITitleData>;

  constructor() {}

  ngOnInit(): void {}
}
