import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { SharedModalComponent } from './shared-modal/shared-modal.component';

@Injectable({
  providedIn: 'root',
})
export class SharedModalService {
  constructor(private dialog: MatDialog) {}

  public passedData$: Subject<Observable<any>> = new Subject();

  public showModal(
    dynamicComponents$: Observable<unknown>,
    passedData: Observable<any>
  ) {
    this.dialog.open(SharedModalComponent, { data: dynamicComponents$ });
    this.passedData$.next(passedData);
  }
}
