import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  username: string = "";
  email: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  async register() {
    try {
      await this.authService.register(this.email, this.password, this.username);
      alert("Usuario registrado exitosamente! " + this.email);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error("Problemas al registrar el usuario: " + error);
      alert("Error al registrar el usuario. Por favor, intente nuevamente.");
    }
  }
}