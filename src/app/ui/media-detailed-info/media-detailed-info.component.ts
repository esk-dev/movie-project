import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media-detailed-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './media-detailed-info.component.html',
  styleUrls: ['./media-detailed-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaDetailedInfoComponent {}
