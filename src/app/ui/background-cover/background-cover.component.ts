import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background-cover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './background-cover.component.html',
  styleUrls: ['./background-cover.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundCoverComponent {}
