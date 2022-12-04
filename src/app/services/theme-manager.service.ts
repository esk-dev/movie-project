import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeManagerService {
  private renderer: Renderer2;

  public isDark = false;

  constructor(public rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public toggleDarkTheme() {
    if (this.isDark) {
      this.renderer.removeClass('body', 'dark-theme');
      this.isDark = false;
    } else {
      this.renderer.addClass('body', 'dark-theme');
      this.isDark = true;
    }
  }
}
