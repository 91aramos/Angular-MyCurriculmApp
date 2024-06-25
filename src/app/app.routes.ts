import { SkillsComponent } from '../components/skills/skills.component';
import { CoursesComponent } from '../components/courses/courses.component';
import { ExperiencesComponent } from '../components/experiences/experiences.component';
import { AboutComponent } from '../components/about/about.component';
import { Routes } from '@angular/router';
import { LoginComponent } from '../components/auth/login/login.component';
import { SectionMainComponent } from '../components/section-main/section-main.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'section-main', component: SectionMainComponent , children: [
    { path: 'about', component: AboutComponent },
    { path: 'experiences', component: ExperiencesComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'skills', component: SkillsComponent },
  ]}
];

