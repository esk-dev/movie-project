import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  stagger,
  query,
} from '@angular/animations';
import { ThemeManagerService } from '../service/theme-manager.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        query(':self', [
          style({
            opacity: 0,
            transform: 'translate(10px, 0)',
          }),
          stagger(3, [
            animate(
              '0.2s 0.2s ease-in',
              style({
                opacity: 1,
                transform: 'translate(0, 0)',
              })
            ),
          ]),
        ]),
      ]),
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate(
          '0.2s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
          style({ opacity: 0, transform: 'scale(0)' })
        ),
      ]),
    ]),
  ],
})
export class ThemeToggleComponent {
  constructor(private themeManager: ThemeManagerService) {}

  public isDark$: Observable<boolean> = this.themeManager.isDark$;

  public toggleTheme() {
    this.themeManager.toggleDarkTheme();
  }
}
