import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  IAnimeResult,
  IMovieResult,
} from 'src/app/core/models/models.interface';

@Component({
  selector: 'media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaCardComponent {
  @Input() public mediaResult: IMovieResult | IAnimeResult;
}
