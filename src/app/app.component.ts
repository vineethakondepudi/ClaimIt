import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    SidenavComponent,
    MatToolbarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isDarkMode: boolean = false;

  ngOnInit(): void {
    // Check if there is a saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      // Set dark theme and update the state
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      this.isDarkMode = true;
    } else {
      // Set light theme and update the state
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      this.isDarkMode = false;
    }
  }

  toggleTheme(): void {
    if (this.isDarkMode) {
      // Switch to light theme
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to dark theme
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }

    // Toggle the theme state
    this.isDarkMode = !this.isDarkMode;
  }
}
