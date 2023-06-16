import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  forwardRef,
} from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { TV_TYPES } from 'src/app/core/constants/tv-types.const';
import { SearchPanelValue } from 'src/app/core/models/models.interface';

@Component({
  selector: 'search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatMenuModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchPanelComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPanelComponent implements ControlValueAccessor {
  public selected: string = TV_TYPES['MOVIE'];

  public TV_TYPES = TV_TYPES;

  public inputInFocus$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  private _value: SearchPanelValue = {
    selector: null,
    search: null,
  };

  private _disabled: boolean = false;

  get value() {
    return this._value;
  }

  get disabled() {
    return this._disabled;
  }

  @Output() searchEmit: EventEmitter<any> = new EventEmitter();

  @Input()
  public withSelector: boolean = false;

  @Input()
  set value(val) {
    this._value = val;
  }

  public onChange: (_: any) => void;

  public onTouched: () => void;

  writeValue(value: any): void {
    this.value.search = value;
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

  onFocus(): void {
    this.inputInFocus$.next(true);
  }

  onBlur(): void {
    this.inputInFocus$.next(false);
  }

  onInput(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.value.search = newValue;
    this.onChange(this.value);
    this.onTouched();
  }

  onSelect(value: string): void {
    this.selected = this.TV_TYPES[value];
    this.value.selector = value;
    this.onChange(this.value);
    this.onTouched();
  }
}
