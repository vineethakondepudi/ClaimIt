import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatTooltipModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent  {
  isLoginPage!: boolean;
  isSideNavStatus: boolean = true;
  isMobile: boolean = false;
  profImage =
    'https://cdn.iconscout.com/icon/free/png-512/free-user-circle-icon-download-in-svg-png-gif-file-formats--contact-profile-ui-vol-9-pack-interface-icons-3005455.png?f=webp&w=256';

  @ViewChild('snav') sidenav!: MatSidenav;

  fillerNav: { name: string; routeLink: string; icon: string }[] = [];
  private roleSubject = new BehaviorSubject<string | null>(localStorage.getItem('role'));

  constructor(
    private themeService: ThemeService,
    private breakpointObserver: BreakpointObserver,
    public router: Router
  ) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isMobile = result.matches;
    });

    this.router.events.subscribe(() => {
      this.isLoginPage = this.router.url.includes('login');
    });

    this.roleSubject.subscribe((role) => this.setNavigationItems(role));
  }
  ngOnInit() {
    
  }

  toggleSidenav() {
    this.isSideNavStatus = !this.isSideNavStatus;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  onSidenavStateChange(event: boolean) {
    this.isSideNavStatus = event;
  }

  logout() {
    localStorage.removeItem('role');
    this.roleSubject.next(null); // Clear role on logout
    this.router.navigate(['/login']);
  }

  setNavigationItems(role: string | null) {
    if (role === 'admin') {
      this.fillerNav = [
        { name: 'Home', routeLink: '/home', icon: 'home' },
        { name: 'Add Item', routeLink: 'add-item', icon: 'add' },
        { name: 'Remove/Archive Item', routeLink: 'remove-archive', icon: 'archive' },
        { name: 'Search', routeLink: 'search', icon: 'search' },
      ];
    } else if (role === 'user') {
      this.fillerNav = [
        { name: 'Home', routeLink: '/home', icon: 'home' },
        { name: 'Search and Claim', routeLink: 'search-claim', icon: 'search' },
        { name: 'View/Unclaim Item', routeLink: 'view-unclaim', icon: 'visibility' },
      ];
    } else {
      this.fillerNav = [];
    }
  }
}
