import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";
  passwordFieldType: string = "password";
  passwordIcon: string = "eye-off-outline";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  async login() {
    try {
      const resultado = await this.authService.login(this.email, this.password);
      if (resultado) {
        alert("¡Inicio de sesión exitoso!");
        this.router.navigate(['/inicio']);
      } else {
        alert("Credenciales inválidas. Por favor, intente nuevamente.");
      }
    } catch (error) {
      console.error("Error en el inicio de sesión: ", error);
      alert("Error en el inicio de sesión. Por favor, verifique sus credenciales e intente nuevamente.");
    }
  }

  togglePasswordVisibility() {
    if (this.passwordFieldType === "password") {
      this.passwordFieldType = "text";
      this.passwordIcon = "eye-outline";
    } else {
      this.passwordFieldType = "password";
      this.passwordIcon = "eye-off-outline";
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToResetPassword() {
    this.router.navigate(['/reset-password']);
  }
}