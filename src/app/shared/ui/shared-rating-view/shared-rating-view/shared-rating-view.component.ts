import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ITitleData } from 'src/app/models/kinopoisk-base-api/kinopoisk-base-api.interface';

@Component({
  selector: 'shared-rating-view',
  templateUrl: './shared-rating-view.component.html',
  styleUrls: ['./shared-rating-view.component.scss'],
})
export class SharedRatingViewComponent {
  @Input() public titleData!: ITitleData;

  @Input() public extended: boolean = false;
}
