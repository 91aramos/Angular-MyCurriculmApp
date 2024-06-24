import { Routes } from '@angular/router';
import { LoginComponent } from '../components/auth/login/login.component';
import { SectionMainComponent } from '../components/section-main/section-main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'section-main', component: SectionMainComponent }
];

