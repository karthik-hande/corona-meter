import { Injectable, Renderer2, RendererFactory2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themes: string[] = ['dark', 'light'];
  private selectedTheme = 'dark';
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    this.renderer = rendererFactory.createRenderer(null, null);
   }


  getThemes() {
    return this.themes;
  }

  setTheme(theme) {
    document.body.className = '';
    this.renderer.addClass(document.body, theme);
    localStorage.setItem('theme', theme);
  }

  setDefaultTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (this.themes.includes(storedTheme)) {
      this.selectedTheme = storedTheme;
    }
    this.setTheme(this.selectedTheme);
  }

  toggleTheme() {
    this.selectedTheme === 'dark' ? this.selectedTheme = 'light' : this.selectedTheme = 'dark';
    this.setTheme(this.selectedTheme);
  }
}
