import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SharedModalComponent } from './shared-modal/shared-modal.component';

@Injectable({
  providedIn: 'root',
})
export class SharedModalService {
  constructor(private dialog: MatDialog) {}

  private passedData$: BehaviorSubject<Observable<any>> = new BehaviorSubject(
    {} as Observable<any>
  );

  public get dataFromModal$(): Observable<any> {
    return this.passedData$.getValue();
  }

  public showModal(
    dynamicComponents$: Observable<unknown>,
    passedData: Observable<any>
  ) {
    this.dialog.open(SharedModalComponent, {
      data: dynamicComponents$,
      width: '90%',
      maxWidth: '800px',
      height: '90%',
    });
    this.passedData$.next(passedData);
  }
}
