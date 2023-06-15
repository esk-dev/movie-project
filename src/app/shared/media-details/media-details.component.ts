import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { IMovieInfo } from '@models/movie.interface';
import { SharedModalService } from '@shared/ui/shared-modal/shared-modal.service';

@Component({
  selector: 'media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaDetailsComponent implements OnInit {
  public mediaInfo$: Observable<IMovieInfo> =
    this.sharedModalService.dataFromModal$;

  constructor(private sharedModalService: SharedModalService) {}

  ngOnInit(): void {
    this.mediaInfo$.subscribe((v) => console.log(v));
  }
}
