import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedButtonComponent } from './shared-button/shared-button.component';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [SharedButtonComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [SharedButtonComponent],
})
export class SharedButtonModule {}
