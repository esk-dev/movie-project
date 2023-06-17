import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss'],
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChipsComponent {
  @Input() title: string;

  @Input() chips: any[];
}
