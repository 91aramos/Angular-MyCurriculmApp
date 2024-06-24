import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userNameSubject= new Subject<string>();
  userName$ = this.userNameSubject.asObservable();

  login(username: string, password: string) {
    if (password == 'admin') {
      this.userNameSubject.next(username);
      return true; // Return true after successful login
    } else {
      return false; // Return false if login fails
    }
  }

}
