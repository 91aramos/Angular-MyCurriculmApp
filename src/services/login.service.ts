import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private username : string = '';

  login(username: string, password: string):boolean{
    if (password == 'admin') {
      this.username=username;
      return true; // Return true after successful login
    } else {
      return false; // Return false if login fails
    }
  }
  getUsername(): string {
    return this.username;
  }
}
