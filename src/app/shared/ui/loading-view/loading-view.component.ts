import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading-view',
  templateUrl: './loading-view.component.html',
  styleUrls: ['./loading-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingViewComponent {
  public faSpinner: IconDefinition = faSpinner;
}
