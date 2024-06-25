import { LoginService } from './../../services/login.service';
import { SectionService } from './../../services/section.service';
import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component'
import { RouterOutlet, Router } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';
import { AboutComponent } from '../about/about.component';


@Component({
  selector: 'app-section-main',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, FooterComponent, RouterOutlet],
  templateUrl: './section-main.component.html',
  styleUrls: ['./section-main.component.css'] // Corregido a 'styleUrls'
})
export class SectionMainComponent {
  user : any='';
  
  constructor( private loginService : LoginService, private router: Router) {
    this.loadUser();
    this.router.navigate([`section-main/about`]);
  }


  loadUser(): void {
   this.user = this.loginService.getUsername();
  }

  onNavigate(event: string) {
    this.router.navigate([`section-main/${event}`]);
  }
}
