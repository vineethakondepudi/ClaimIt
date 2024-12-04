import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectorRef,
    Component,
    inject,
    ViewChild,
    viewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';
import { ThemeService } from '../theme.service';

@Component({
    selector: 'app-sidenav',
    imports: [
        CommonModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        RouterOutlet,
        RouterModule,
        MatTooltipModule,
    ],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
    isLoginPage!: boolean;
    isSideNavStatus: boolean = true;

    isMobile: boolean = false;

    profImage =
        'https://cdn.iconscout.com/icon/free/png-512/free-user-circle-icon-download-in-svg-png-gif-file-formats--contact-profile-ui-vol-9-pack-interface-icons-3005455.png?f=webp&w=256';

    @ViewChild('snav') sidenav!: MatSidenav;

    fillerNav = [
        { name: 'Home', routeLink: '/home', icon: 'home' },
        { name: 'Search and Claim', routeLink: 'search-claim', icon: 'search' },
        { name: 'View/Unclaim Item', routeLink: 'view-unclaim', icon: 'task' },
    ];

    constructor(private themeService: ThemeService, private breakpointObserver: BreakpointObserver, public router: Router) {
        this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
            this.isMobile = result.matches;
        });
        this.router.events.subscribe(() => {
            this.isLoginPage = this.router.url.includes('login'); // Check if current route is /login
        });
    }


    toggleSidenav() {
        this.isSideNavStatus = !this.isSideNavStatus;
    }

    toggleTheme(): void {
        this.themeService.toggleTheme();
    }

    onSidenavStateChange(event: boolean) {
        this.isSideNavStatus = event; // Sync state if necessary
    }
    logout(){
        this.router.navigate(['/login'])
    }
}