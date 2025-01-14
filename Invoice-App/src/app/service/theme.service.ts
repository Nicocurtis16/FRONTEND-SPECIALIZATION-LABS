import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isDarkTheme: boolean = false;
  get isDarkTheme(): boolean {
    return this._isDarkTheme;
  }

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this._isDarkTheme = savedTheme === 'dark';
      this.applyTheme();
    }
  }

  toggleTheme(): void {
    this._isDarkTheme = !this._isDarkTheme;
    this.applyTheme();
    localStorage.setItem('theme', this._isDarkTheme ? 'dark' : 'light');
  }

  applyTheme(): void {
    const root = document.documentElement;
    if (this._isDarkTheme) {
      root.classList.add('dark-theme');
    } else {
      root.classList.remove('dark-theme');
    }
  }

  getTheme(): 'light' | 'dark' {
    return this._isDarkTheme ? 'dark' : 'light';
  }
}
