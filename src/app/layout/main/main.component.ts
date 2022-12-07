import { Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointsService } from '../services/breakpoints.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  readonly breakpoints = Breakpoints;

  constructor(private readonly breakpointsService: BreakpointsService) {}

  public platformType: Observable<string> = this.breakpointsService.layoutType$;
}
