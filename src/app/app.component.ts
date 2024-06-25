import { AboutComponent } from '../components/about/about.component';
import { HeaderComponent } from './../components/shared/header/header.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './../components/auth/login/login.component';
import { FooterComponent } from './../components/shared/footer/footer.component';
import { SectionMainComponent } from '../components/section-main/section-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent,AboutComponent, HeaderComponent, FooterComponent, SectionMainComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-MyCurriculmApp';
}
