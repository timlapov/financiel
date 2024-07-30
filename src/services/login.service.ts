import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  email: string = "";
  password: string = "";
  loggedIn: boolean = false;

  constructor() {  }

}
