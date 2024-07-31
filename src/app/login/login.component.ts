import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  service = inject(LoginService);
  router = inject(Router);
  public form: FormGroup = new FormGroup( {
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    }
  )

  login() {
    let email: string = this.form.get('email')?.value;
    let password: string = this.form.get('password')?.value;
    this.service.setIsAuthenticated(email, password);
    if (this.service.isAuthenticated) {
      this.router.navigate(['/dashboard']);
    } else {
      alert("The data entered is incorrect ");
    }
  }
  logout() {
    this.service.clearIsAuthenticated();
  }
}
