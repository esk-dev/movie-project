import { Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointsService } from '../services/breakpoints.service';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'main-layout',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  readonly breakpoints = Breakpoints;

  constructor(private readonly breakpointsService: BreakpointsService) {}

  public platformType: Observable<string> = this.breakpointsService.layoutType$;
}
