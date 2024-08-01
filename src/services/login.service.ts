import { Injectable } from '@angular/core';
import {IUser} from "./entities";
import {mockUser} from "./fakeData";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {  }

  isAuthenticated: boolean = true;
  user: IUser = mockUser;

  setIsAuthenticated(email: string, password: string) {
    this.isAuthenticated = email === this.user.email && password === this.user.password;
  }
  clearIsAuthenticated() {
    this.isAuthenticated = false;
  }
}
