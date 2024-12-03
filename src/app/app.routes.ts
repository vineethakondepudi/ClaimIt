import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CreateTemplateComponent } from './features/create-template/create-template.component';
import { InfoComponent } from './features/info/info.component';
import { LoginComponent } from './features/login/login.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { SearchClaimComponent } from './features/search-claim/search-claim.component';
import { ViewUnclaimComponent } from './features/view-unclaim/view-unclaim.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'help', component: InfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'search-claim', component: SearchClaimComponent },
  { path: 'view-unclaim', component: ViewUnclaimComponent },
];
