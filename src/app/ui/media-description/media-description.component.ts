import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ui-media-description',
  templateUrl: './media-description.component.html',
  styleUrls: ['./media-description.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaDescriptionComponent {
  @Input()
  public mediaDescription!: string;

  @Input()
  public isFullDescription: boolean = false;

  public isReadMore: BehaviorSubject<boolean> = new BehaviorSubject(
    this.isFullDescription
  );

  public showText(): void {
    this.isReadMore.next(!this.isReadMore.value);
  }
}
