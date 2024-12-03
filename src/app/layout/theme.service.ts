import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode: boolean = false;

  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      this.isDarkMode = true;
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      this.isDarkMode = false;
    }
  }

  toggleTheme(): void {
    if (this.isDarkMode) {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }

    this.isDarkMode = !this.isDarkMode;
  }
}
