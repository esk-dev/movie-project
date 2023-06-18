import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { SharedModalComponent } from './shared-modal/shared-modal.component';

@Injectable({
  providedIn: 'root',
})
export class SharedModalService {
  constructor(private dialog: MatDialog) {}

  private passedData$: BehaviorSubject<Observable<any>> = new BehaviorSubject(
    null
  );

  get dataFromModal$() {
    return this.passedData$.getValue();
  }

  public showModal<T>(
    dynamicComponents$: Observable<unknown>,
    passedData$?: Observable<T>
  ) {
    this.dialog.open(SharedModalComponent, {
      data: dynamicComponents$,
      width: '90%',
      maxWidth: '800px',
      height: '90%',
    });
    this.passedData$.next(passedData$ ?? null);
  }
}
