import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-media-preview',
  templateUrl: './media-preview.component.html',
  styleUrls: ['./media-preview.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaPreviewComponent {}
