import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
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
