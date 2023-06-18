import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModalComponent } from './shared-modal/shared-modal.component';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [SharedModalComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [SharedModalComponent],
})
export class SharedModalModule {}
