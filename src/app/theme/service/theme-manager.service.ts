import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable()
export class ThemeManagerService {
  private renderer: Renderer2;

  private isDark: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public isDark$: Observable<boolean> = this.isDark.asObservable();

  constructor(public rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public toggleDarkTheme() {
    if (this.isDark.getValue()) {
      this.isDark.next(false);
      this.renderer.removeClass(document.body, 'dark-theme');
    } else {
      this.renderer.addClass(document.body, 'dark-theme');
      this.isDark.next(true);
    }
  }

  // private initTheme() {
  //   this.getColorTheme();
  //   this.renderer.addClass(document.body, this.colorTheme);
  // }
}
