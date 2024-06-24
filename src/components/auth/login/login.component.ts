import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginResult = '';

  constructor(private router: Router, private loginService: LoginService) {}

  solve(event: Event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
    const usernameElem = document.getElementById('usr') as HTMLInputElement;
    const passwordElem = document.getElementById(
      'password'
    ) as HTMLInputElement;

    if (this.loginService.login(usernameElem?.value, passwordElem?.value)) {
      this.router.navigateByUrl('/section-main'); // Navigate to section-main if login is successful
    }
    else {
      this.loginResult = 'Wrong Password';
    }
  }
}
