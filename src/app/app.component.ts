import { Component } from '@angular/core';
import { ThemeManagerService } from './services/theme-manager.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'movie-project';

  public isDark: boolean = this.themeManager.isDark;

  constructor(public themeManager: ThemeManagerService) {}

  toggleDarkTheme() {
    this.themeManager.toggleDarkTheme();
    this.isDark = !this.isDark;
  }
}
