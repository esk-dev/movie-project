import { Subject, debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatMenuModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPanelComponent {
  public isOnFocus: boolean = false;

  private searchDebounce: number = 300;

  private searchSubject$: Subject<string> = new Subject();

  private get query() {
    return this.searchBox.nativeElement.value;
  }

  private set query(value: string) {
    this.searchBox.nativeElement.value = value;
  }

  @ViewChild('searchBox', { static: true }) searchBox: ElementRef;

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onSearch = this.searchSubject$.pipe(
    filter(Boolean),
    filter((query: string) => query.length > 3),
    distinctUntilChanged(),
    debounceTime(this.searchDebounce)
  );

  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  @Output() onFocus = new EventEmitter<string>();

  public doSearch() {
    this.searchSubject$.next(this.query);
  }

  public doFocus() {
    this.isOnFocus = true;
    this.onFocus.emit(this.query);
  }

  public onBlur() {
    this.isOnFocus = false;
  }

  public focus() {
    this.searchBox.nativeElement.focus();
  }
}
