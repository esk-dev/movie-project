import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  public searchField: FormControl = new FormControl<string>('');

  public onSubmit(): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    this.searchField.value
      ? console.log(this.searchField.value)
      : console.warn('Empty field');
    this.searchField.reset();
  }
}
