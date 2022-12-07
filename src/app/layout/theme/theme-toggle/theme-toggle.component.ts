import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ThemeManagerService } from '../service/theme-manager.service';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
// TODO
// Дебаг анимации иконки
// Иконка ререндерится позже чем срабатывает анимация
// Что пробовал: stagger && query
@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '0.3s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
          style({ opacity: 1, transform: 'translateY(-2.5px)' })
        ),
        animate('0.05s linear', style({ transform: 'translateY(4.5px)' })),
        animate('0.05s ease-in', style({ transform: '*' })),
      ]),
      transition(':leave', [
        animate(
          '0.2s cubic-bezier(0.59, 0.32, 0.38, 1.13)',
          style({ opacity: 0, transform: 'translateY(-20px)' })
        ),
      ]),
    ]),
  ],
  providers: [ThemeManagerService],
})
export class ThemeToggleComponent {
  public faMoon = faMoon;

  public faSun = faSun;

  constructor(private themeManager: ThemeManagerService) {}

  public isDark$: Observable<boolean> = this.themeManager.isDark$;

  public toggleTheme() {
    this.themeManager.toggleDarkTheme();
  }
}