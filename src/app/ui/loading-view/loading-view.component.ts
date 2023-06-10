import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading-view',
  templateUrl: './loading-view.component.html',
  styleUrls: ['./loading-view.component.scss'],
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingViewComponent {
  public faSpinner: IconDefinition = faSpinner;
}
