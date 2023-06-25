import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { inOutAnimation } from '@shared/animations/fade-in-out.animation';

@Component({
  selector: 'media-card-background-poster',
  templateUrl: './media-card-background-poster.component.html',
  styleUrls: ['./media-card-background-poster.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [inOutAnimation],
})
export class MediaCardBackgroundPosterComponent {
  @Input() posterUrl!: string | undefined;

  public isLoading: boolean = true;

  public showContent$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  @HostListener('mouseenter')
  onMouseEnter() {
    this.showContent$.next(true);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.showContent$.next(false);
  }

  hideLoader() {
    console.log('loaded image');
    this.isLoading = false;
  }
}
