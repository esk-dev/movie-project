import { Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BreakpointsService } from '../services/breakpoints.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  private isExpand: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public expanded$ = this.isExpand.asObservable();

  readonly breakpoints = Breakpoints;

  constructor(private readonly breakpointsService: BreakpointsService) {}

  public platformType: Observable<string> = this.breakpointsService.layoutType$;

  public toggle(): void {
    this.isExpand.next(!this.isExpand.getValue());
  }

  public close(): void {
    this.isExpand.next(false);
  }
}
