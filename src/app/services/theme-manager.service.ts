import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ThemeManagerService {
  private renderer: Renderer2;

  public isDark: boolean = false;

  constructor(public rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public toggleDarkTheme() {
    if (this.isDark) {
      this.renderer.removeClass(document.body, 'dark-theme');
      this.isDark = false;
    } else {
      this.renderer.addClass(document.body, 'dark-theme');
      this.isDark = true;
    }
  }

  // private initTheme() {
  //   this.getColorTheme();
  //   this.renderer.addClass(document.body, this.colorTheme);
  // }
}
