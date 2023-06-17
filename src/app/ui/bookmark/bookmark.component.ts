import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarkComponent {
  // @Input() user: User; When make user autorization
  public isMediaInBookmark: boolean = true;
}
