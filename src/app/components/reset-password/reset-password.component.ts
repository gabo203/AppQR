import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent {
  email: string = "";
  currentPassword: string = "";
  newPassword: string = "";
  confirmPassword: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  async resetPassword() {
    try {
      await this.authService.sendPasswordResetEmail(this.email);
      alert("Se ha enviado un correo de restablecimiento de contraseña. Por favor, revisa tu bandeja de entrada.");
      this.router.navigate(['/login']);
    } catch (error) {
      console.error("Error al enviar el correo de restablecimiento: ", error);
      alert("Error al enviar el correo de restablecimiento. Por favor, verifica tu correo electrónico e intenta nuevamente.");
    }
  }

  goToLogin() {
  this.router.navigate(['/login']);
}
}