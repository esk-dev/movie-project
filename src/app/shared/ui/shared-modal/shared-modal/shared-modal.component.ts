import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-shared-modal',
  templateUrl: './shared-modal.component.html',
  styleUrls: ['./shared-modal.component.scss'],
})
export class SharedModalComponent {
  constructor(
    public dialogRef: MatDialogRef<SharedModalComponent>,
    @Inject(MAT_DIALOG_DATA) public dynamicComponents$: Observable<any>
  ) {}
}
