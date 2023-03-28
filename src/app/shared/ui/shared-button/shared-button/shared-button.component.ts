import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './shared-button.component.html',
  styleUrls: ['./shared-button.component.scss'],
})
export class SharedButtonComponent {
  @Input() public btnContext!: any;

  @Input() public color: string = 'primary';

  @Output() private buttonClickEmit = new EventEmitter<void>();

  public onClick(): void {
    this.buttonClickEmit.emit();
  }
}
