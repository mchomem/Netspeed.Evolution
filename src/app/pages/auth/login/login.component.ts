import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Login } from '../../../models/login.model';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  #authService: AuthService;

  constructor(authService: AuthService) {
    this.#authService = authService;
  }

  public login(email: string, password: string) {
    this.#authService.login({ email, password } as Login).subscribe(data => {
      if (data.success) {
        var login = data.data as Login;
        sessionStorage.setItem('token', login.value);
        console.log("LOGADO! Token:", login.value);
      }
      else {
        console.log("Erro no Login!");
      }
    });
  }
}
